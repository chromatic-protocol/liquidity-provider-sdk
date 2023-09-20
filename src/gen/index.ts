//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChromaticLP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const chromaticLpABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'lpLogic', internalType: 'contract ChromaticLPLogic', type: 'address' },
      {
        name: 'config',
        internalType: 'struct ChromaticLPStorage.Config',
        type: 'tuple',
        components: [
          { name: 'market', internalType: 'contract IChromaticMarket', type: 'address' },
          { name: 'utilizationTargetBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'rebalanceBPS', internalType: 'uint16', type: 'uint16' },
          { name: 'rebalnceCheckingInterval', internalType: 'uint256', type: 'uint256' },
          { name: 'settleCheckingInterval', internalType: 'uint256', type: 'uint256' }
        ]
      },
      { name: 'feeRates', internalType: 'int16[]', type: 'int16[]' },
      { name: 'distributionRates', internalType: 'uint16[]', type: 'uint16[]' },
      {
        name: 'automateParam',
        internalType: 'struct ChromaticLPStorage.AutomateParam',
        type: 'tuple',
        components: [
          { name: 'automate', internalType: 'address', type: 'address' },
          { name: 'opsProxyFactory', internalType: 'address', type: 'address' }
        ]
      }
    ]
  },
  { type: 'error', inputs: [], name: 'AlreadyRebalanceTaskExist' },
  { type: 'error', inputs: [], name: 'AlreadySwapRouterConfigured' },
  { type: 'error', inputs: [], name: 'InvalidDistributionSum' },
  { type: 'error', inputs: [], name: 'InvalidRebalanceBPS' },
  {
    type: 'error',
    inputs: [{ name: 'targetBPS', internalType: 'uint16', type: 'uint16' }],
    name: 'InvalidUtilizationTarget'
  },
  { type: 'error', inputs: [], name: 'NotKeeperCalled' },
  { type: 'error', inputs: [], name: 'NotMarket' },
  {
    type: 'error',
    inputs: [
      { name: 'feeLength', internalType: 'uint256', type: 'uint256' },
      { name: 'distributionLength', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'NotMatchDistributionLength'
  },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'OnlyBatchCall' },
  { type: 'error', inputs: [], name: 'UnknownLPAction' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'oracleVersion', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'AddLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'AddLiquiditySettled'
  },
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
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true }],
    name: 'RebalanceLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true }],
    name: 'RebalanceSettled'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'oracleVersion', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RemoveLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true }],
    name: 'RemoveLiquiditySettled'
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
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'CHROMATIC_LP_LOGIC',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' }
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
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'addLiquidityBatchCallback',
    outputs: []
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'addLiquidityCallback',
    outputs: []
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
    inputs: [],
    name: 'automate',
    outputs: [{ name: '', internalType: 'contract IAutomate', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'int16[]', type: 'int16[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'claimLiquidityBatchCallback',
    outputs: []
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'int16', type: 'int16' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'claimLiquidityCallback',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clbTokenBalances',
    outputs: [{ name: '_clbTokenBalances', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clbTokenIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'dedicatedMsgSender',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'feeRates',
    outputs: [{ name: '', internalType: 'int16[]', type: 'int16[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
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
    outputs: [{ name: 'receiptIds', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'holdingClbValue',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'holdingValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
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
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingClbValue',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'pendingValue',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'rebalance', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' }
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
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'removeLiquidityBatchCallback',
    outputs: []
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'removeLiquidityCallback',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'resolveRebalance',
    outputs: [
      { name: '', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
    name: 'resolveSettle',
    outputs: [
      { name: '', internalType: 'bool', type: 'bool' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'settle',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'settleTask',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'settlementToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
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
    name: 'totalClbValue',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalValue',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }]
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
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'utilization',
    outputs: [{ name: 'currentUtility', internalType: 'uint16', type: 'uint16' }]
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
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'int16[]', type: 'int16[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'withdrawLiquidityBatchCallback',
    outputs: []
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'int16', type: 'int16' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'withdrawLiquidityCallback',
    outputs: []
  },
  { stateMutability: 'payable', type: 'receive' }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChromaticLPRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xB4Db00d1E88049b6a07f96E87882C3F6B53A392E)
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
    inputs: [{ name: 'lp', internalType: 'address', type: 'address', indexed: true }],
    name: 'ChromaticLPRegistered'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'lp', internalType: 'address', type: 'address', indexed: true }],
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
 * [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xB4Db00d1E88049b6a07f96E87882C3F6B53A392E)
 */
export const chromaticLpRegistryAddress = {
  421613: '0xB4Db00d1E88049b6a07f96E87882C3F6B53A392E'
} as const

/**
 * [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io//address/0xB4Db00d1E88049b6a07f96E87882C3F6B53A392E)
 */
export const chromaticLpRegistryConfig = {
  address: chromaticLpRegistryAddress,
  abi: chromaticLpRegistryABI
} as const
