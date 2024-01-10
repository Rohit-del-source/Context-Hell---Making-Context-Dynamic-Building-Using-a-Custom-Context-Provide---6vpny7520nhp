// App.js
import React from 'react';

import MyComponent from '../components/MyComponent';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { UserProvider } from '@/contexts/UserContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ConfigProvider } from '@/contexts/ConfigContext';

function App() {
  return (

        <ThemeProvider>
          <UserProvider>
            <LanguageProvider>
              <ConfigProvider>
                <MyComponent />
              </ConfigProvider>
            </LanguageProvider>
          </UserProvider>
        </ThemeProvider>
            
  );
}

export default App;
