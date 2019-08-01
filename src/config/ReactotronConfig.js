import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

/* Executa sempre que estiver em ambiente de desenvolvimento. */
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  /* Criando uma nova propriedade dentro do console. Assim facilita ter acesso
  ao Reactotron sem ter que importa-lo toda vez. */
  console.tron = tron;

  /* Limpa a timeline toda vez que é dado um refresh na aplicação. */
  tron.clear();
}
