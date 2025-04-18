import sinon from 'sinon';

before(async () => {
  console.log('[setup] iniciando testes de integração...');
});

beforeEach(async () => {
  sinon.restore();
});
