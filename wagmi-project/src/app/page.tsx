'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import React, {useState, useEffect, FormEvent} from "react"


import { ethers } from "ethers"
import { Token__factory } from '@/typechain-types'
import type { Token } from "@/typechain-types"
import type { BrowserProvider } from "ethers"



declare let window: any;



function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      
      <div>
        <h2>Connect function</h2>
        
 
      </div>
    </>
  )
}

export default App
