import { type FC, Fragment, useCallback, useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { ChevronRight, ExternalLink, Menu, X } from 'lucide-react';
import { formatGwei, parseGwei } from 'viem';
import { useGasPrice } from 'wagmi';

import { CHAINS } from '@/lib/constants/gas-visualizer';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { Cell, Chain } from '@/lib/types/gas-visualizer';
import { cn, tables } from '@/lib/utils';
import { fetchFiatRates } from '@/lib/utils';

import { Button, IconButton, Input, Label, Select, Slider } from '@/components/ui';
import { SelectItem } from '@/components/ui/select';

const { getOriginalCellsAndInit, getGasInDollarsCells, updateCellsDOM } = tables;

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type GasReportBreakdownActionBarProps = {
  repoUrl: string;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const GasReportBreakdownActionBar: FC<GasReportBreakdownActionBarProps> = (props) => {
  const [showGasInDollars, setShowGasInDollars] = useState<boolean>(false);
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  // Chain selection (selected by user)
  const [currentChain, selectChain] = useState<Chain>(CHAINS[0]);
  // Gas price (network + user selection)
  const [currentGasPrice, selectGasPrice] = useState<number>(0);
  // Native token price (network + user selection)
  const [currentNativeTokenPrices, selectNativeTokenPrices] = useState<Record<string, number>>({});
  // Cells
  const [cells, setCells] = useState<Cell[]>([]);

  // Data fetching
  const { refetch: fetchGasPrice } = useGasPrice({
    chainId: currentChain.info.id,
  });
  const getNativeTokenPrices = async () => {
    const prices = await fetchFiatRates();
    if (!prices) return {};

    return Object.fromEntries(prices.map((price) => [price.symbol, price.price])) as Record<
      string,
      number
    >;
  };

  const init = async () => {
    const original = await getOriginalCellsAndInit(document);
    updateCellsDOM(document, original, 'restore');
    setCells(original);
  };

  const updateWithLatestData = useCallback(async () => {
    updateCellsDOM(document, cells, 'loading');
    setFetchingData(true);
    const { data: gasPrice } = await fetchGasPrice();
    const nativeTokenPrices = await getNativeTokenPrices();
    setFetchingData(false);

    selectGasPrice(Number(gasPrice));
    selectNativeTokenPrices(nativeTokenPrices);
  }, [cells, fetchGasPrice]);

  const toShowGasInDollars = useCallback(
    async (fetch: boolean) => {
      const alreadyFetched = currentGasPrice !== 0;
      if (fetch || !alreadyFetched) await updateWithLatestData();

      const updatedCells = await getGasInDollarsCells(
        cells,
        currentGasPrice,
        currentNativeTokenPrices[currentChain.info.nativeCurrency.symbol],
        currentChain.info.nativeCurrency.decimals,
      );
      setCells(updatedCells);
      updateCellsDOM(document, updatedCells, 'update');
    },
    [
      cells,
      currentGasPrice,
      currentNativeTokenPrices,
      currentChain.info.nativeCurrency.decimals,
      currentChain.info.nativeCurrency.symbol,
      updateWithLatestData,
    ],
  );

  const toShowGasInUnits = useCallback(async () => {
    if (!cells.length) return;
    updateCellsDOM(document, cells, 'restore');
  }, [cells]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (showGasInDollars) {
      toShowGasInDollars(false);
    } else {
      toShowGasInUnits();
    }
  }, [showGasInDollars, toShowGasInDollars, toShowGasInUnits]);

  const userActions = (
    <div className="flex flex-col gap-6">
      <span className="mb-6 mt-8 block h-px w-[30%] self-center bg-gray-6" />

      {/* Gas in units/dollars */}
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium">Display gas in</div>
        <div className="flex w-full justify-between gap-2">
          <Button
            className={cn('w-full', showGasInDollars ? 'opacity-70' : '')}
            size="sm"
            variant={showGasInDollars ? 'secondary' : 'primary'}
            intent="none"
            onClick={() => {
              setShowGasInDollars(false);
            }}
          >
            Units
          </Button>
          <Button
            className={cn('w-full', showGasInDollars ? '' : 'opacity-70')}
            size="sm"
            variant={showGasInDollars ? 'primary' : 'secondary'}
            intent="none"
            onClick={() => {
              setShowGasInDollars(true);
            }}
          >
            Dollars
          </Button>
        </div>
      </div>

      {/* Chain */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="chain" className="text-gray-11">
          1. Chain
        </Label>
        <Select
          id="chain"
          className="w-full"
          value={currentChain.info.id}
          disabled={!showGasInDollars}
          onChange={async (e) => {
            const selectedChain = CHAINS.find((chain) => chain.info.id === Number(e.target.value));
            if (selectedChain) {
              await selectChain(selectedChain);
              toShowGasInDollars(true);
            }
          }}
        >
          {CHAINS.filter((chain) => chain.layer === 'L1').map((chain) => (
            <SelectItem key={chain.info.id} value={chain.info.id}>
              {chain.info.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Gas price */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="gasPrice" className="text-gray-11">
          2. Gas price (Gwei)
        </Label>
        <Slider
          className="mt-2"
          min={Number(parseGwei('0.001'))} // 0.001 Gwei
          max={Number(parseGwei('1000'))} // 1,000 Gwei
          step={Number(parseGwei('0.001'))} // 0.001 Gwei
          // defaultValue={[Number(formatGwei(BigInt(currentGasPrice)))]}
          value={[currentGasPrice]}
          disabled={!showGasInDollars || fetchingData}
          onValueChange={(e) => selectGasPrice(Number(e))}
        />
        <Input
          id="gasPrice"
          className="mt-2"
          // remove arrows
          style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
          type="number"
          min={Number(parseGwei('0.001'))} // 0.001 Gwei
          max={Number(parseGwei('1000'))} // 1,000 Gwei
          value={formatGwei(BigInt(currentGasPrice || 0))}
          disabled={!showGasInDollars || fetchingData}
          onChange={(e) => selectGasPrice(Number(parseGwei(e.target.value)))}
        />
      </div>

      {/* Native token price */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="nativeTokenPrice" className="text-gray-11">
          3. {currentChain.info.nativeCurrency.symbol} price
        </Label>
        <div className="relative mt-2">
          <Input
            id="nativeTokenPrice"
            className="w-full pl-8"
            type="number"
            min={0}
            value={currentNativeTokenPrices[currentChain.info.nativeCurrency.symbol]?.toFixed(2)}
            disabled={!showGasInDollars || fetchingData}
            onChange={(e) =>
              selectNativeTokenPrices({
                ...currentNativeTokenPrices,
                [currentChain.info.nativeCurrency.symbol]: Number(e.target.value),
              })
            }
          />
          <span className="absolute left-3 top-[50%] translate-y-[-50%] text-gray-11">$</span>
        </div>
      </div>

      {/* Restore current chain data */}
      <Button
        className="w-full py-2"
        size="sm"
        variant="secondary"
        intent="primary"
        disabled={!showGasInDollars || fetchingData}
        onClick={() => toShowGasInDollars(true)}
      >
        Use latest {currentChain.info.name} data
      </Button>

      <span className="my-4 block h-px w-[30%] self-center bg-gray-6" />

      {/* Simulator */}
      <div className="flex flex-col gap-2 text-justify text-sm text-muted-foreground">
        <p>
          Price are not available in dollars for L2s, due to the cost of submitting transactions to
          the underlying L1.
        </p>
        <p>
          But you can use <span className="font-medium">the simulator</span> to predict the most
          optimized solution for a specific transaction.
        </p>
        <Button
          className="mt-2 w-full cursor-not-allowed py-2 opacity-50"
          variant="secondary"
          intent="orange"
        >
          Simulator (soon)
        </Button>
      </div>
    </div>
  );

  return (
    <Fragment>
      <GasReportBreakdownActionBarDesktop {...props} inputs={userActions} />
      <GasReportBreakdownActionBarMobile
        {...props}
        inputs={userActions}
        showGasInDollars={showGasInDollars}
        currentChain={currentChain.name}
        currentGas={Number(formatGwei(BigInt(currentGasPrice || 0))).toFixed()}
      />
    </Fragment>
  );
};

const GasReportBreakdownActionBarDesktop: FC<
  GasReportBreakdownActionBarProps & { inputs: JSX.Element }
> = (props) => {
  return (
    <nav
      className="hide-scrollbar sticky top-28 -ml-3 hidden min-w-[16rem] max-w-[16rem] flex-col overflow-y-scroll px-0.5 md:flex lg:min-w-[18rem] lg:max-w-[18rem]"
      style={{ height: 'calc(100vh - 11rem)' }}
    >
      <GasReportBreakdownActionBarInternal {...props} />
    </nav>
  );
};

const GasReportBreakdownActionBarMobile: FC<
  GasReportBreakdownActionBarProps & { inputs: JSX.Element } & {
    showGasInDollars: boolean;
    currentChain: string;
    currentGas: string;
  }
> = ({ repoUrl, inputs, showGasInDollars, currentChain, currentGas }) => {
  const [open, setOpen] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  return (
    <Dialog.Root open={open && isSmallScreen} onOpenChange={setOpen}>
      <div className="pointer-events-auto sticky top-0 z-popover mb-6 flex h-12 w-full items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:hidden">
        <Dialog.Trigger asChild>
          <IconButton
            variant="outline"
            aria-label={open ? 'Close blog post nav bar' : 'Open blog post nav bar'}
          >
            {open ? <X /> : <Menu />}
          </IconButton>
        </Dialog.Trigger>
        {showGasInDollars ? (
          <ol className="ml-4 flex text-sm">
            <li className="flex items-center text-gray-11">
              {currentChain}
              <ChevronRight className="mx-1 h-4 w-4" />
            </li>
            <li className="font-medium text-gray-12">{currentGas} Gwei</li>
          </ol>
        ) : (
          <div className="ml-4 text-gray-11">Gas units</div>
        )}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-overlay backdrop-brightness-50 animate-in fade-in-50 focus:outline-none md:hidden" />
        <Dialog.Content onOpenAutoFocus={(e) => e.preventDefault()} asChild>
          <nav className="hide-scrollbar fixed inset-0 z-overlay overflow-y-scroll bg-gray-1 p-4 pt-16 animate-in slide-in-from-top-1 md:hidden">
            {/* Open external link */}
            <Button
              className="mb-4 w-full justify-self-end py-2"
              size="md"
              variant="outline"
              intent="primary"
              href={repoUrl}
              rightIcon={<ExternalLink />}
              newTab
            >
              Open on GitHub
            </Button>
            {inputs}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const GasReportBreakdownActionBarInternal: FC<
  GasReportBreakdownActionBarProps & { inputs: JSX.Element }
> = ({ repoUrl, inputs }) => {
  return (
    <Fragment>
      {/* Open external link */}
      <Button
        className="w-full justify-self-end py-2"
        size="md"
        variant="outline"
        intent="primary"
        href={repoUrl}
        rightIcon={<ExternalLink />}
        newTab
      >
        Open on GitHub
      </Button>
      {inputs}
    </Fragment>
  );
};

export default GasReportBreakdownActionBar;
