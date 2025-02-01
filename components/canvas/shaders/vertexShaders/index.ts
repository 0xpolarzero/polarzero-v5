import vertexShaderHome from './vertexShaderHome';
import vertexShaderPortfolio from './vertexShaderPortfolio';
import vertexShaderWriting from './vertexShaderWriting';

const vertexShaders = {
  '/': vertexShaderHome,
  '/portfolio': vertexShaderPortfolio,
  '/writing': vertexShaderWriting,
  '/resume': vertexShaderHome,
};

export default vertexShaders;
