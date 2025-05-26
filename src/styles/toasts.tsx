import Toast from 'react-native-toast-message';

export const handleSubmitRegister = () => {
  Toast.show({
    type: 'success',
    text1: 'Conta criada!',
    text2: 'Você já pode fazer login. 👋',
  });
};

export const handleError = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro ao criar conta!',
    text2: 'Verifique os dados e tente novamente. 👋',
  });
};

export const handleLogin = () => {
  Toast.show({
    type: 'success',
    text1: 'Login realizado com sucesso!',
    text2: 'Bem-vindo de volta! 👋',
  });
};
export const handleLoginError = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro ao fazer login!',
    text2: 'Verifique os dados e tente novamente. 👋',
  });
};
export const handleDelete = () => {
  Toast.show({
    type: 'success',
    text1: 'Tarefa deletada!',
    text2: 'A tarefa foi deletada com sucesso. 👋',
  });
};

export const Logout = () => {
  Toast.show({
    type: 'success',
    text1: 'Logout realizado com sucesso!',
    text2: 'Até logo! 👋',
  });
};

export const handleErrorLogout = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro ao fazer logout!',
    text2: 'Verifique os dados e tente novamente. 👋',
  });
};


export const handleErrorWhatsapp = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro ao enviar mensagem!',
    text2: 'Verifique o número e tente novamente. 👋',
  });
};

export const handleErrorLocation = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro ao obter localização!',
    text2: 'Verifique as permissões e tente novamente. 👋',
  });
};
