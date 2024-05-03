/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { langData } from 'app/core/_data';

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  return (
    <section>
      <Menu>
        <div className='flex flex-col'>
          <div className='flex place-items-start items-center relative gap-3 font-medium'>
            <img src={langData.find((item) => item.id === selectedLanguage)?.img} alt='flag' />
            <Menu.Button>
              {selectedLanguage}
              <img className='inline-block ps-2' src='/icons/arrow.svg' alt='' />
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-100'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='absolute top-16'>
              <Menu.Items>
                {langData.map(({ id, label, img }) => (
                  <Menu.Item key={id}>
                    {() => (
                      <button
                        onClick={() => setSelectedLanguage(id)}
                        className={`flex place-items-start items-center mt-1 hover:text-primary-600 gap-3 ${
                          id === selectedLanguage && 'text-primary font-semibold'
                        }`}
                      >
                        <img className='w-5 justify-center items-center' src={img} alt='' />
                        {label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </Transition>
        </div>
      </Menu>
    </section>
  );
};

export default LanguageSwitcher;
