type File = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content?: string;
  encoding?: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

type Response = {
  data: Record<string, string>;
  status: number;
  error: Error | null;
};

const fetchGithubAndFormat = async (author: string, repo: string): Promise<Response> => {
  const response = await fetch(`https://api.github.com/repos/${author}/${repo}/contents`, {
    next: {
      revalidate: 100,
    },
  });

  // Failed to fetch
  if (!response.ok) {
    return {
      data: {},
      status: response.status,
      error: new Error(response.statusText),
    };
  }

  const data: File[] = await response.json();

  // Get README.md
  const readMe = data.find((file) => file.name.toLowerCase() === 'readme.md');
  const readMeResponse = await fetch(readMe?.download_url || '');
  const readMeContent = await readMeResponse.text();

  if (!readMeContent) {
    return {
      data: {},
      status: 404,
      error: new Error('README.md not found'),
    };
  }

  // Find any links to content inside the repository in the Readme
  const dirs = data.filter((file) => file.type === 'dir').map((dir) => dir.path);
  const linkRegex = /\]\(([^)]+)\)/g;
  const urls: Record<string, string> = readMeContent
    // Find all links
    .split('\n')
    .filter((line) => line.includes(']('))
    .map((line) => {
      const matches = [...line.matchAll(linkRegex)];
      return matches.map((match) => match[1]);
    })
    .flat()
    // Keep only links to .sol files inside the repository
    .filter(
      (url) =>
        url.endsWith('.sol') && (url.startsWith('./') || dirs.some((dir) => url.startsWith(dir))),
    )
    // Keep only unique links and get both the contract name and the full URL
    .reduce((acc: { [contractName: string]: string }, url) => {
      const parts = url.split('/'); // Split the URL by '/'
      const contractName = parts[parts.length - 1]; // Extract the last part as the contract name
      if (!acc[contractName]) {
        acc[contractName] = `https://raw.githubusercontent.com/${author}/${repo}/main/${url.replace(
          './',
          '',
        )}`;
      }
      return acc;
    }, {});

  // Replace HTML comments that mark cells including gas amounts with text
  // so it doesn't get removed by the markdown parser
  const readMeContentCellsMarked = readMeContent.replace(/<!--\s*g\s*-->/g, '--GAS--');

  // Fetch all files
  const files: Record<string, string> = await Promise.all(
    Object.entries(urls).map(async ([contractName, url]) => {
      const response = await fetch(url);
      const content = await response.text();
      return [contractName, content];
    }),
  ).then((arr) => Object.fromEntries(arr));

  return {
    data: { ...files, readme: readMeContentCellsMarked },
    status: 200,
    error: null,
  };
};

export default fetchGithubAndFormat;
