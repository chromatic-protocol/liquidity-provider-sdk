//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChromaticLPRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Mantle Testnet Mantle Testnet Explorer__](https://explorer.testnet.mantle.xyz/address/0x0A5e5d654d2684b43b74aC075c4dEf7057bE5e9C)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xa0A7C965caFB3DAAD821D89326b78999817f69CB)
 */
export const chromaticLpRegistryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'contract IChromaticMarketFactory', type: 'address' }
    ]
  },
  { type: 'error', inputs: [], name: 'OnlyAccessableByOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'market', internalType: 'address', type: 'address', indexed: true },
      { name: 'lp', internalType: 'address', type: 'address', indexed: true }
    ],
    name: 'ChromaticLPRegistered'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'market', internalType: 'address', type: 'address', indexed: true },
      { name: 'lp', internalType: 'address', type: 'address', indexed: true }
    ],
    name: 'ChromaticLPUnregistered'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true }
    ],
    name: 'OwnershipTransferred'
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'contract IChromaticMarketFactory', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'market', internalType: 'address', type: 'address' }],
    name: 'lpListByMarket',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'lpListBySettlementToken',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'lp', internalType: 'contract IChromaticLP', type: 'address' }],
    name: 'register',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'lp', internalType: 'contract IChromaticLP', type: 'address' }],
    name: 'unregister',
    outputs: []
  }
] as const

/**
 * - [__View Contract on Mantle Testnet Mantle Testnet Explorer__](https://explorer.testnet.mantle.xyz/address/0x0A5e5d654d2684b43b74aC075c4dEf7057bE5e9C)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xa0A7C965caFB3DAAD821D89326b78999817f69CB)
 */
export const chromaticLpRegistryAddress = {
  5001: '0x0A5e5d654d2684b43b74aC075c4dEf7057bE5e9C',
  421613: '0xa0A7C965caFB3DAAD821D89326b78999817f69CB'
} as const

/**
 * - [__View Contract on Mantle Testnet Mantle Testnet Explorer__](https://explorer.testnet.mantle.xyz/address/0x0A5e5d654d2684b43b74aC075c4dEf7057bE5e9C)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xa0A7C965caFB3DAAD821D89326b78999817f69CB)
 */
export const chromaticLpRegistryConfig = {
  address: chromaticLpRegistryAddress,
  abi: chromaticLpRegistryABI
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IChromaticLP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iChromaticLpABI = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' }
    ],
    name: 'addLiquidity',
    outputs: [
      {
        name: '',
        internalType: 'struct ChromaticLPReceipt',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'action', internalType: 'enum ChromaticLPAction', type: 'uint8' }
        ]
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'cancelRebalanceTask',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clbTokenBalances',
    outputs: [{ name: 'balances', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clbTokenIds',
    outputs: [{ name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'createRebalanceTask',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeRates',
    outputs: [{ name: 'feeRates', internalType: 'int16[]', type: 'int16[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getReceipt',
    outputs: [
      {
        name: '',
        internalType: 'struct ChromaticLPReceipt',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'action', internalType: 'enum ChromaticLPAction', type: 'uint8' }
        ]
      }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getReceiptIdsOf',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'holdingClbValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'holdingValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lpName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lpToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'market',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingClbValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' }
    ],
    name: 'removeLiquidity',
    outputs: [
      {
        name: '',
        internalType: 'struct ChromaticLPReceipt',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'action', internalType: 'enum ChromaticLPAction', type: 'uint8' }
        ]
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
    name: 'settle',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'settlementToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalClbValue',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'utilization',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'valueInfo',
    outputs: [
      {
        name: 'info',
        internalType: 'struct ValueInfo',
        type: 'tuple',
        components: [
          { name: 'total', internalType: 'uint256', type: 'uint256' },
          { name: 'holding', internalType: 'uint256', type: 'uint256' },
          { name: 'pending', internalType: 'uint256', type: 'uint256' },
          { name: 'holdingClb', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingClb', internalType: 'uint256', type: 'uint256' }
        ]
      }
    ]
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'Approval'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'Transfer'
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  }
] as const
