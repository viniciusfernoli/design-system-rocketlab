import './styles/global.css';
import {Logo} from './Logo'
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <div className='bg-gray-700'>
        <header className='flex flex-col items-center mt-8'>
          <Logo/>

          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>

          <Text size='sm' className='text-gray-400 mt-1'>Faça o login e comece a usar!</Text>
        </header>
        <body>
          <form className='flex flex-col items-stretch max-w-sm mt-8 gap-4 ml-20 mr-20'>
            <label htmlFor="email" className='flex flex-col gap-3'>
              <Text className='font-semibold'>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope/>
                </TextInput.Icon>

              <TextInput.Input type='email' id='email' placeholder='Digite seu email'/>
              </TextInput.Root>

            </label>

            <label htmlFor="password" className='flex flex-col gap-3'>
              <Text className='font-semibold'>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock/>
                </TextInput.Icon>

              <TextInput.Input type='password' id='password' placeholder='************'/>
              </TextInput.Root>

            </label>

            <label htmlFor='remember' className='flex items-center gap-2'>
              <Checkbox id='remember'/>
              <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
            </label>

            <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
          </form>
          <div className='flex flex-col items-center mt-6 '>
            <a href="" className='mb-4'>
              <Text size='sm'  className='underline text-gray-400'>Esqueceu sua senha?</Text>
            </a>

            <a href="" className='mb-10'>
              <Text size='sm' className='underline text-gray-400'>Não tem uma conta? Crie uma agora!</Text>
            </a>
          </div>
        </body>
      </div>
    </div>
  )
}