import * as React from 'react';
import { Alert } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  i18n,
  Locale,
  navigation,
  useI18n,
  state,
  modules,
  http,
  crypto,
  biometry,
} from '@tenpo/lib-core';

import {
  Canvas,
  Group,
  Button,
  Form,
  BusinessV3Theme,
  TenpoV3Theme,
  TeenpoV3Theme,
  Icon,
  Input,
  Level,
  Modal,
  NavBar,
  Text,
  Image,
  useColorMode,
} from '@tenpo/lib-ui';

import Asdf from '../res/car.svg';

// Sub-Componentes
const Cuenta = ({ variant }) => (
  <Level variant={variant}>
    <Image.Svg source={Asdf} width={25} stroke="primary.500" />
    <Text>Cuentas</Text>
  </Level>
);

const LanguageChange = () => {
  const { locale } = useI18n();
  return (
    <Level>
      <Text variant="h2">Cambio de idioma</Text>
      <Text variant="p2">
        Apreta uno de los botones para cambiar el lenguaje
      </Text>

      <Text variant="p2">{i18n.t('title')}</Text>
      <Text variant="p2">{i18n.t('description')}</Text>

      <Button.Group>
        <Button
          title="es"
          onPress={() => {
            i18n.setLocale(Locale.es);
          }}
        />
        <Button
          title="es_PE"
          onPress={() => {
            i18n.setLocale(Locale.es_PE);
          }}
        />
      </Button.Group>
      <Text variant="p2">{`Actual: "${locale}"`}</Text>
    </Level>
  );
};

const IconsSample = () => {
  const iconNames = [
    'alert-circle',
    'alert-triangle',
    'archive',
    'arrow-down-circle',
    'arrow-down-left',
    'arrow-down-right',
    'arrow-left',
    'arrow-left-circle',
    'arrow-right',
    'arrow-right-circle',
    'arrow-up',
    'arrow-up-circle',
    'arrow-up-left',
    'arrow-up-right',
    'bar-chart',
    'bell',
    'bell-off',
    'bookmark',
    'calendar',
    'camera',
    'camera-off',
    'check',
    'check-circle',
    'check-square',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clock',
    'copy',
    'corner-down-left',
    'corner-down-right',
    'corner-left-down',
    'corner-left-up',
    'corner-right-down',
    'corner-right-up',
    'corner-up-left',
    'corner-up-right',
    'credit-card',
    'database',
    'download',
    'download-cloud',
    'edit-1',
    'edit-2',
    'edit-3',
    'external-link',
    'eye',
    'eye-off',
    'facebook',
    'file',
    'file-minus',
    'file-plus',
    'file-text',
    'flag',
    'folder',
    'frown',
    'gift',
    'headphones',
    'heart',
    'help-circle',
    'home',
    'image',
    'info',
    'instagram',
    'link-1',
    'link-2',
    'linkedin',
    'list',
    'loader',
    'lock',
    'log-in',
    'log-out',
    'menu',
    'navigation',
    'package',
    'paperclip',
    'phone',
    'phone-call',
    'plus',
    'plus-circle',
    'search',
    'send',
    'settings',
    'share-1',
    'share-2',
    'shield',
    'shield-off',
    'shopping-bag',
    'slash',
    'slides',
    'smile',
    'star',
    'thumb-down',
    'thumb-up',
    'tool',
    'trash-1',
    'trash-2',
    'trending-down',
    'trending-up',
    'truck',
    'twitter',
    'unlock',
    'upload',
    'upload-cloud',
    'user',
    'user-check',
    'user-minus',
    'user-plus',
    'user-x',
    'users',
    'x',
    'x-circle',
    'youtube',
    'zap',
    'zoom-in',
    'zoom-out',
  ];

  return (
    <Level pb="4">
      <Text variant="h2">Icons</Text>

      <Text variant="h4">Sizes</Text>

      <Group horizontal space={3} flexWrap="wrap">
        <Icon name="alert-circle" mb={4} size="sm" />
        <Icon name="alert-circle" mb={4} size="md" />
        <Icon name="alert-circle" mb={4} size="lg" />
      </Group>

      <Text variant="h4">Tenpo icons</Text>

      <Group horizontal mb="4" space={3} flexWrap="wrap">
        {iconNames.map(name => (
          <Icon name={name} key={`icon-${name}`} mb={4} />
        ))}
      </Group>

      <Text variant="h4">Colored icons</Text>

      <Group horizontal mb="4" space={3} flexWrap="wrap">
        {iconNames.map(name => (
          <Icon name={name} key={`icon-${name}`} mb={4} color="primary.400" />
        ))}
      </Group>

      <Text variant="p2">
        Inline <Icon name="alert-circle" /> icon
      </Text>
    </Level>
  );
};

const ModalSample = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Level>
      <Text variant="h2">Modal</Text>

      <Button shadow={2} onPress={() => setShowModal(true)} mb="4">
        Abrir Modal
      </Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Image.Svg alignSelf="center" height={16} source={Asdf} />
        </Modal.Header>
        <Modal.Body>
          <Text
            variant="h6"
            textAlign="center"
            _dark={{
              color: 'text.900',
            }}>
            ¡Ouch!
          </Text>
          <Text
            variant="h3"
            textAlign="center"
            _dark={{
              color: 'text.900',
            }}>
            Algunos datos son incorrectos
          </Text>
          <Text
            textAlign="center"
            _dark={{
              color: 'text.900',
            }}>
            Revisa que tu clave de acceso y N° teléfono, RUT o correo
            electrónico sean los correctos.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2} direction="column">
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              title="Volver a intentar"
            />
            <Button
              variant="link"
              colorScheme="text"
              onPress={() => {
                setShowModal(false);
              }}
              title="Crear cuenta"
              _dark={{
                _text: {
                  color: 'text.900',
                },
                _pressed: {
                  _text: {
                    color: 'text.500',
                  },
                },
              }}
            />
          </Button.Group>
        </Modal.Footer>
      </Modal>
    </Level>
  );
};

const ModeChange = () => {
  const { colorMode, changeColorMode } = useColorMode();
  return (
    <Level>
      <Text variant="h2">Cambio de modo</Text>
      <Text variant="p2">Apreta uno de los botones para cambiar el modo</Text>
      <Button.Group>
        <Button title="Dark" onPress={() => changeColorMode('dark')} />
        <Button title="Light" onPress={() => changeColorMode('light')} />
      </Button.Group>
      <Text my="2">{`Actual: "${colorMode}"`}</Text>
    </Level>
  );
};

const StateTest = () => {
  const value = state.useModuleSelector('${{ parameters.moduleName }}', 'local', 'selectValue');
  const dispatch = state.useDispatch();

  return (
    <Level>
      <Text variant="h2">Prueba de state</Text>
      <Text variant="p2">
        Apreta uno de los botones para actualizar el valor
      </Text>
      <Button.Group>
        <Button
          title="Boton 1"
          onPress={() =>
            dispatch(
              state.getAction('${{ parameters.moduleName }}', 'local', 'setValue')('Boton 1'),
            )
          }
        />
        <Button
          title="Boton 2"
          onPress={() =>
            dispatch(
              state.getAction('${{ parameters.moduleName }}', 'local', 'setValue')('Boton 2'),
            )
          }
        />
      </Button.Group>
      <Text variant="p2">{`Actual: "${value}"`}</Text>
    </Level>
  );
};

const FormSample = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: (values, ...args) => {
      return yupResolver(
        yup.object().shape({
          password: yup.string().required('The password is required'),
          username: yup.string().required('The username is required'),
        }),
      )(values, ...args);
    },
  });

  const handleSubmit = async ({ username, password }: any) => {
    try {
      const data: any = await http
        .getPublicClient()
        ?.get('v1/device-management/devices/init-params');

      const loginData: any = await http.getPublicClient().post(
        'tenpo-login/v1/login',
        {
          username: username,
          password: crypto.rsaEncrypt(data.data.publicKey, password),
          application: 'APP',
          native_device_id: '53684bDF-E44B-4E0F-BCB3-B8C4F4D0B9C8',
        },
        {
          headers: {
            'token-app': '123456',
          },
        },
      );

      const currentConfig = http.getPrivateClient().getBaseConfig();
      if (currentConfig) {
        currentConfig.headers = {
          ...currentConfig.headers,
          Authorization: `Bearer ${loginData.data.access_token}`,
        };
      }

      const {
        data: {
          user: { id, email, phone },
        },
      } = await http.getPrivateClient().get<{
        data: {
          user: {
            id: string;
            email: string;
            phone: string;
          };
        };
      }>('v2/users/me');

      try {
        await biometry.authenticate();
      } catch (error) {
        console.log(error);
      }

      Alert.alert(`User data`, `id: ${id}, email: ${email}, phone: ${phone}`);
    } catch (error) {
      Alert.alert('Error', 'Username and/or password are incorrect!');
    }
  };

  const values = methods.watch();

  return (
    <Level>
      <Text variant="h2">Form</Text>
      <Text mb="2">{JSON.stringify(values)}</Text>

      <FormProvider {...methods}>
        <Form.InputText
          name="username"
          label="Username"
          placeholder="Enter username"
          autoCapitalize="none"
        />
        <Form.InputText
          name="password"
          label="Password"
          placeholder="Enter password"
          secureTextEntry
        />

        <Button
          disabled={!methods.formState.isValid}
          loading={methods.formState.isSubmitting}
          onPress={methods.handleSubmit(handleSubmit)}
          title="Log In"
          mb="6"
        />
      </FormProvider>
    </Level>
  );
};

const HookTest = () => {
  const { data, reload, status, abort } = modules.useHook(
    '${{ parameters.moduleName }}',
    'useRemote',
  );

  return (
    <Level>
      <Text variant="h2">Prueba de hook</Text>
      <Text variant="p2">Apreta el botón para volver a cargar</Text>
      <Button.Group>
        <Button title="Recargar" onPress={() => reload()} />
        <Button title="Abortar" onPress={() => abort()} />
      </Button.Group>
      <Text variant="p2">{`Status: "${status}", Value: ${data}`}</Text>
    </Level>
  );
};

function ${{ parameters.moduleName }}(): JSX.Element {
  const [theme, setTheme] = React.useState('personal');

  return (
    <Canvas
      theme={
        theme === 'personal'
          ? TenpoV3Theme
          : theme === 'teenpo'
          ? TeenpoV3Theme
          : BusinessV3Theme
      }
      header={<Text variant="p2">Esto es un título general</Text>}>
      <NavBar
        title="Crear cuenta"
        onBackButtonPress={() => Alert.alert('Go Back!')}
      />
      <Level>
        <Button
          onPress={() => {
            navigation.navigate('AuthSignInEnterUsername', {
              username: 'aaron.nunez148@mailinator.com',
            });
          }}
          title="Go to Sign In"
          mb="4"
        />

        <ModeChange />

        <Level>
          <Text variant="h2">Cambio de tema</Text>
          <Button.Group collapsable>
            <Button title="Persona" onPress={() => setTheme('personal')} />
            <Button title="Teenpo" onPress={() => setTheme('teenpo')} />
            <Button title="Business" onPress={() => setTheme('business')} />
          </Button.Group>
          <Text my="2">{`Tema Actual: "${theme}"`}</Text>
        </Level>

        <ModalSample />

        <FormSample />

        <Level pb="4">
          <Text variant="h2">Images</Text>

          <Group horizontal mb="4" space={2}>
            <Image.Svg size="sm" source={Asdf} />
            <Image.Svg size="md" source={Asdf} colorScheme="rose" />
            <Image.Svg size="lg" source={Asdf} colorScheme="amber" />
            <Image.Svg height={79} source={Asdf} colorScheme="cyan" />
          </Group>

          <Group horizontal space={2}>
            <Image
              size="2xs"
              alt="Fallback text"
              src="https://www.w3schools.com/css/img_lights.jpg"
            />
            <Image
              size="xs"
              alt="Fallback text"
              src="https://www.w3schools.com/css/img_lights.jpg"
            />
            <Image
              size="sm"
              alt="Fallback text"
              src="https://www.w3schools.com/css/img_lights.jpg"
            />
            <Image
              height="100"
              alt="Fallback text"
              src="https://www.w3schools.com/css/img_lights.jpg"
            />
          </Group>
        </Level>

        <IconsSample />

        <Level>
          <Text variant="h2">Input</Text>

          <Input label="Normal state" placeholder="Normal state" />
          <Input
            editable={false}
            label="Non editable state"
            placeholder="Non editable state"
          />
          <Input disabled label="Disabled state" placeholder="Disabled state" />
          <Input
            error="El campo no es válido"
            label="Invalid state"
            placeholder="Invalid state"
          />

          <Text mt="4" variant="h2">
            Input Code
          </Text>
          <Input.Code label="Normal state" value="1234" />
          <Input.Code
            label="Non editable state"
            value="1234"
            editable={false}
          />
          <Input.Code label="Disabled state" value="1234" disabled />
          <Input.Code
            label="Invalid state"
            value="1234"
            error="Tu clave de acceso no coinciden."
          />
        </Level>

        <Button.Group attached direction="column" variant="outline" mb="4">
          <Button
            onPress={() => {
              navigation.navigate('Template2');
            }}
            title="Navegar a Template 2"
          />
          <Button
            title="Editar correo electrónico"
            _text={{
              fontFamily: 'body',
              _dark: {
                color: 'text.100',
              },
            }}
          />
        </Button.Group>

        <Level pb="4">
          <Text variant="p2">default</Text>

          <Text variant="h1">h1</Text>
          <Text variant="h2">h2</Text>
          <Text variant="h3">h3</Text>
          <Text variant="h4">h4</Text>
          <Text variant="h5">h5</Text>
          <Text variant="h6">h6</Text>
          <Text variant="h7">h7</Text>

          <Text variant="p1">Paragraph 2xl</Text>
          <Text variant="p2">Paragraph 2xl</Text>
          <Text variant="p3">Paragraph 2xl</Text>
          <Text variant="p4">Paragraph 2xl</Text>
          <Text variant="p5">Paragraph 2xl</Text>
          <Text variant="p6">Paragraph 2xl</Text>

          <Text variant="tag1">Tag 2xl</Text>
          <Text variant="tag2">Tag 2xl</Text>
          <Text variant="tag3">Tag 2xl</Text>
        </Level>

        <LanguageChange />
        <HookTest />
        <StateTest />

        <Text variant="h2">Esto es un título general</Text>
        <Text variant="p2">
          Párrafo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin vel molestie ligula. Cras dapibus purus id mi congue volutpat.
          In in nulla non orci maximus finibus.
        </Text>
        <Level>
          <Text variant="h2">Esto es un título general</Text>
          <Text variant="p2">
            Párrafo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Group horizontal>
            <Cuenta variant="md" />
            <Cuenta variant="md" />
          </Group>
        </Level>
        <Group horizontal>
          <Cuenta variant="md" />
          <Cuenta variant="md" />
          <Cuenta variant="md" />
        </Group>
        <Group horizontal>
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
          <Cuenta variant="sm" />
        </Group>
      </Level>
    </Canvas>
  );
}

export default ${{ parameters.moduleName }};
