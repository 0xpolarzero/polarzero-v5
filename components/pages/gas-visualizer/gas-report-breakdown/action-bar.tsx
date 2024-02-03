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

  // TODO Create functions "handleChainChange" and "handleGasPriceChange", etc
  // Check if data is already fetched, if not, fetch it, if yes just take it
  // Only change dom if currently price in dollars, otherwise not
  // TODO Use showGasInDollars callback on useEffect to trigger these as well

  // - disable all buttons (everything but open on github)) if "Dollars" not selected
  // - On first dollars selection, fetch data and update cells
  // - On click on "Use latest chain data/current data, gas price" refetch everything and update
  // - On chain change, refetch everything and update
  // - Otherwise, on manual gas price change or native token price change, just update cells

  // TODO On click (when needed to fetch), set cells to Skeleton directly,
  // TODO then update when data is here
  // ! Same for inputs when using latest data

  const userActions = (
    <>
      {/* Gas in units/dollars */}
      <div className="mb-2 h-min w-full justify-start py-1 text-base font-medium">
        Display gas in
      </div>
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
      {/* Chain */}
      <Label htmlFor="chain" className="mb-2 mt-6 text-gray-11">
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
      {/* Gas price */}
      <Label htmlFor="gasPrice" className="mb-2 mt-6 text-gray-11">
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
        className="mt-4"
        // remove arrows
        style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
        type="number"
        min={Number(parseGwei('0.001'))} // 0.001 Gwei
        max={Number(parseGwei('1000'))} // 1,000 Gwei
        value={formatGwei(BigInt(currentGasPrice || 0))}
        disabled={!showGasInDollars || fetchingData}
        onChange={(e) => selectGasPrice(Number(parseGwei(e.target.value)))}
      />
      {/* Native token price */}
      <Label htmlFor="nativeTokenPrice" className="mb-2 mt-6 text-gray-11">
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
      {/* Restore current chain data */}
      <Button
        className="mt-6 w-full py-2"
        size="sm"
        variant="secondary"
        intent="primary"
        disabled={!showGasInDollars || fetchingData}
        onClick={() => toShowGasInDollars(true)}
      >
        Use latest {currentChain.info.name} data
      </Button>
      <div className="mt-6 flex flex-col text-justify text-sm text-muted-foreground">
        <span>
          Price are not available in dollars for L2s, due to the cost of submitting transactions to
          the underlying L1.
        </span>
        <span>
          But you can use <span className="font-medium">the simulator</span> to predict the most
          optimized solution for a specific transaction.
        </span>
        <Button
          className="mt-2 w-full cursor-not-allowed py-2 opacity-50"
          variant="secondary"
          intent="orange"
        >
          Simulator (soon)
        </Button>
      </div>
    </>
  );

  return (
    <Fragment>
      <GasReportBreakdownActionBarDesktop {...props} inputs={userActions} />
      <GasReportBreakdownActionBarMobile {...props} inputs={userActions} />
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
  GasReportBreakdownActionBarProps & { inputs: JSX.Element }
> = ({ repoUrl, inputs }) => {
  const pricesInDollarEnabled = true;
  const chain = 'Ethereum';
  const gwei = '30 Gwei';

  const [open, setOpen] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // `md` breakpoint

  return (
    <Dialog.Root open={open && isSmallScreen} onOpenChange={setOpen}>
      <div className="pointer-events-auto sticky top-12 z-popover mb-6 flex h-12 w-full items-center border-b border-gray-6 bg-white px-4 dark:bg-black md:hidden">
        <Dialog.Trigger asChild>
          <IconButton
            variant="outline"
            aria-label={open ? 'Close blog post nav bar' : 'Open blog post nav bar'}
          >
            {open ? <X /> : <Menu />}
          </IconButton>
        </Dialog.Trigger>
        {pricesInDollarEnabled ? (
          <ol className="ml-4 flex text-sm">
            <li className="flex items-center text-gray-11">
              {chain}
              <ChevronRight className="mx-1 h-4 w-4" />
            </li>
            <li className="font-medium text-gray-12">{gwei}</li>
          </ol>
        ) : null}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-overlay backdrop-brightness-50 animate-in fade-in-50 focus:outline-none md:hidden" />
        <Dialog.Content onOpenAutoFocus={(e) => e.preventDefault()} asChild>
          <nav className="hide-scrollbar fixed inset-0 z-overlay overflow-y-scroll bg-gray-1 p-4 pt-28 animate-in slide-in-from-top-1 md:hidden">
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
            <div className="px-1 py-1 text-base font-medium">here</div>
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
      {/* separator */}
      <span className="my-8 block h-px w-full bg-gray-6" />

      {inputs}
    </Fragment>
  );
};

export default GasReportBreakdownActionBar;
