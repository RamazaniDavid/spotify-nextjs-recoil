import React from 'react'
import { Menu } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react';

function Normal() {
    const { data: session, status } = useSession();
    return (
        <Menu>
            <Menu.Button>{session?.user?.name}</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="https://www.spotify.com/account/overview/"
                        >
                            Account
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                            onClick={() => {
                                signOut()
                            }}
                        >
                            Log Out
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default Normal