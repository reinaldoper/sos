# 📋 SOSApp

1. Aplicativo SOS, que tem como objetivo fornecer ao usuário a possibilidade de enviar a sua localização em tempo real, por whatsApp,feito  com **React Native**, **Firebase Firestore** e **Gluestack UI**.  
2. O aplicativo pede autorização ao usuario para acessar seus contatos e sua localização, salva no  **firebase** e fornece um histórico de sua localizações.
3. Cria e loga usuário na aplicação, com email e senha.

---

## 🚀 Funcionalidades

- ✅ Adicionar localizações no firebase
- 📋 Listar histórico de localizações
- ✔️ Acessar contatos
- 💅 Interface com Gluestack UI
- 📱 Enviar localização por whatsApp
- 🎬 Animações suaves com Reanimated

---

## 📂 Estrutura de Pastas

```bash
SOS/
├── android
│   ├── app
│   ├── build
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── animations
│   │   │   └── login.json
│   │   └── images
│   │       ├── home.jpg
│   │       ├── unnamed.jpg
│   │       └── users.jpg
│   ├── components
│   │   ├── LogoutButton.tsx
│   │   ├── Pressable.tsx
│   │   ├── safetyTips.tsx
│   │   └── TaskItem.tsx
│   ├── constants
│   │   ├── constants.tsx
│   │   ├── mapsLink.tsx
│   │   └── whatsApp.tsx
│   ├── firebase
│   │   └── firebaseConfig.tsx
│   ├── hooks
│   │   └── useTask.tsx
│   ├── screens
│   │   ├── Contacts.tsx
│   │   ├── Historys.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Safety.tsx
│   ├── styles
│   │   ├── colors.tsx
│   │   ├── style.tsx
│   │   └── toasts.tsx
│   └── types
│       └── types.ts
├── tailwind.config.js
├── __tests__
│   └── App.test.tsx
├── tsconfig.json
└── yarn.lock

```


---

## 🧑‍💻 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/reinaldoper/sos.git
cd sos
&&
npm install
##ou
yarn install

```

---

### 2. Configurar o Firebase

1. Criar um projeto no Firebase Console
- Acesse o site do Firebase (firebase.google.com) e crie uma conta, caso ainda não tenha.

- No Firebase Console, crie um novo projeto.

- Dentro do projeto, habilite os métodos de autenticação que pretende usar, por exemplo, e-mail e senha, em Authentication > Sign-in method.

- Registre sua aplicação para as plataformas desejadas (iOS e/ou Android), fornecendo o identificador do app (exemplo: com.reactnativefirebase).

---

2. Baixe os arquivos de configuração gerados:

- Para Android: google-services.json

- Para iOS: GoogleService-Info.plist

- Copie suas credenciais do Firebase Web SDK

- Crie um .env na raiz do projeto e coloque as credenciais do firebase:

```env

FIREBASE_API_KEY="apiKey"
FIREBASE_AUTH_DOMAIN="authDomain"
FIREBASE_PROJECT_ID="projectId"
FIREBASE_STORAGE_BUCKET="storageBucket"
FIREBASE_MESSAGING_SENDER_ID="messagingSenderId"
FIREBASE_APP_ID="appId"
MEASUREMENT_ID="measurementId"
```
---

📱 Rodar no Android
- Certifique-se de estar com um emulador ou dispositivo conectado.

```bash
npx react-native run-android
```

---

### 3. 🛠️ Gerar APK de Debug local

```bash
cd android
./gradlew assembleDebug

#ou

cd android
./gradlew assembleRelease

```

1. Depois disso, o APK estará gerado em:

⚠️ Atenção: o APK de debug não é assinado para a Play Store — ele serve apenas para instalar manualmente em aparelhos para testes.

```bash
android/app/build/outputs/apk/debug/app-debug.apk

#ou

android/app/build/outputs/apk/release/app-release.apk
```


---

### 4. 🧪 Comandos úteis

```bash
npx react-native start --reset-cache            
npm run android                
```



---

### 5. 📦 Tecnologias utilizadas

- React Native

- Firebase Firestore

- React Navigation

- Gluestack UI

- react-hook-form

- react-native-reanimated

- Nodejs >=18


---

### 6. 🧑 Autor
- Desenvolvido por: Reinaldo Pereira dos Santos
- 📍 Dourados - MS
- 📧 reinaldoper83@gmail.com