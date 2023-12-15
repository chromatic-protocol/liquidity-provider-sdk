//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChromaticBPFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const chromaticBpFactoryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'automate', internalType: 'contract IAutomateBP', type: 'address' }]
  },
  { type: 'error', inputs: [], name: 'OnlyAccessableByOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lp', internalType: 'address', type: 'address', indexed: true },
      { name: 'bp', internalType: 'address', type: 'address', indexed: false }
    ],
    name: 'ChromaticBPCreated'
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
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'automateBP', internalType: 'address', type: 'address', indexed: false }],
    name: 'SetAutomateBP'
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'bpList',
    outputs: [{ name: 'bpAddresses', internalType: 'address[]', type: 'address[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'lp', internalType: 'address', type: 'address' }],
    name: 'bpListByLP',
    outputs: [{ name: 'bpAddresses', internalType: 'address[]', type: 'address[]' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'config',
        internalType: 'struct BPConfig',
        type: 'tuple',
        components: [
          { name: 'lp', internalType: 'contract IChromaticLP', type: 'address' },
          { name: 'totalReward', internalType: 'uint256', type: 'uint256' },
          { name: 'minRaisingTarget', internalType: 'uint256', type: 'uint256' },
          { name: 'maxRaisingTarget', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimeOfWarmup', internalType: 'uint256', type: 'uint256' },
          { name: 'maxDurationOfWarmup', internalType: 'uint256', type: 'uint256' },
          { name: 'durationOfLockup', internalType: 'uint256', type: 'uint256' }
        ]
      }
    ],
    name: 'createBP',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAutomateBP',
    outputs: [{ name: 'automate', internalType: 'contract IAutomateBP', type: 'address' }]
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'automate', internalType: 'contract IAutomateBP', type: 'address' }],
    name: 'setAutomateBP',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  }
] as const

/**
 *
 */
export const chromaticBpFactoryAddress = {
  421614: '0x482736De288D1c5B53c86A821cAf90268a58cB81'
} as const

/**
 *
 */
export const chromaticBpFactoryConfig = {
  address: chromaticBpFactoryAddress,
  abi: chromaticBpFactoryABI
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ChromaticLPRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const chromaticLpRegistryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_factory', internalType: 'contract IChromaticMarketFactory', type: 'address' }
    ]
  },
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NotRegistered' },
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
    inputs: [],
    name: 'lpList',
    outputs: [{ name: 'lpAddresses', internalType: 'address[]', type: 'address[]' }]
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
 *
 */
export const chromaticLpRegistryAddress = {
  421614: '0x8C3FA15fdCb5F87483De80CffFAA2b96928e75b1'
} as const

/**
 *
 */
export const chromaticLpRegistryConfig = {
  address: chromaticLpRegistryAddress,
  abi: chromaticLpRegistryABI
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IChromaticBP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iChromaticBpABI = [
  { type: 'error', inputs: [], name: 'BoostingNotExecuted' },
  { type: 'error', inputs: [], name: 'BoostingNotSettled' },
  { type: 'error', inputs: [], name: 'ClaimBalanceZeroError' },
  { type: 'error', inputs: [], name: 'ClaimTimeError' },
  { type: 'error', inputs: [], name: 'FullyRaised' },
  { type: 'error', inputs: [], name: 'InvalidLockup' },
  { type: 'error', inputs: [], name: 'InvalidRaisingTarget' },
  { type: 'error', inputs: [], name: 'InvalidWarmup' },
  { type: 'error', inputs: [], name: 'NonTransferable' },
  { type: 'error', inputs: [], name: 'NotAutomationCalled' },
  { type: 'error', inputs: [], name: 'NotBoostable' },
  { type: 'error', inputs: [], name: 'NotLPCalled' },
  { type: 'error', inputs: [], name: 'NotRefundablePeriod' },
  { type: 'error', inputs: [], name: 'NotWarmupPeriod' },
  { type: 'error', inputs: [], name: 'RefundError' },
  { type: 'error', inputs: [], name: 'RefundZeroAmountError' },
  { type: 'error', inputs: [], name: 'StartTimeError' },
  { type: 'error', inputs: [], name: 'TooSmallMinRaisingTarget' },
  { type: 'error', inputs: [], name: 'ZeroDepositError' },
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
  { type: 'event', anonymous: false, inputs: [], name: 'BPBoostTaskCreated' },
  { type: 'event', anonymous: false, inputs: [], name: 'BPBoostTaskExecuted' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'bpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'BPClaimed'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'BPDeposited'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'totalRaised', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'BPFullyRaised'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'BPRefunded'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'totalLPToken', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'BPSettleUpdated'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'totalReward', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'SetTotalReward'
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
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'boost', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'feePayee', internalType: 'address', type: 'address' },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'boostTask',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'checkBoost',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'claimLiquidity',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentPeriod',
    outputs: [{ name: 'period', internalType: 'enum BPPeriod', type: 'uint8' }]
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
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'endTimeOfLockup',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'endTimeOfWarmup',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isClaimable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isDepositable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'isRefundable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxRaisingTarget',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minRaisingTarget',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'refund', outputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'settlementToken',
    outputs: [{ name: 'token', internalType: 'contract IERC20', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'startTimeOfWarmup',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'status',
    outputs: [{ name: '', internalType: 'enum BPStatus', type: 'uint8' }]
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
    name: 'targetLP',
    outputs: [{ name: 'lpAddress', internalType: 'contract IChromaticLP', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalRaised',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalReward',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IChromaticLP
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iChromaticLpABI = [
  { type: 'error', inputs: [], name: 'InvalidMinHoldingValueToRebalance' },
  { type: 'error', inputs: [], name: 'InvalidRebalanceBPS' },
  {
    type: 'error',
    inputs: [{ name: 'targetBPS', internalType: 'uint16', type: 'uint16' }],
    name: 'InvalidUtilizationTarget'
  },
  { type: 'error', inputs: [], name: 'NotAutomationCalled' },
  { type: 'error', inputs: [], name: 'NotImplementedInLogicContract' },
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
  { type: 'error', inputs: [], name: 'OnlyAccessableByOwner' },
  { type: 'error', inputs: [], name: 'OnlyBatchCall' },
  { type: 'error', inputs: [], name: 'TooSmallAmountToAddLiquidity' },
  { type: 'error', inputs: [], name: 'UnknownLPAction' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
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
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'settlementAdded', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'AddLiquiditySettled'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'oracleVersion', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'currentUtility', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RebalanceAddLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'oracleVersion', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'currentUtility', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RebalanceRemoveLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RebalanceSettled'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'oracleVersion', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'lpTokenAmount', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RemoveLiquidity'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'provider', internalType: 'address', type: 'address', indexed: true },
      { name: 'recipient', internalType: 'address', type: 'address', indexed: true },
      { name: 'burningAmount', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'withdrawnSettlementAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false
      },
      { name: 'refundedAmount', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256', indexed: false }
    ],
    name: 'RemoveLiquiditySettled'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'automate', internalType: 'address', type: 'address', indexed: false }],
    name: 'SetAutomateLP'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newValue', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'SetAutomationFeeReserved'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'name', internalType: 'string', type: 'string', indexed: false }],
    name: 'SetLpName'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'tag', internalType: 'string', type: 'string', indexed: false }],
    name: 'SetLpTag'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newValue', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'SetMinHoldingValueToRebalance'
  },
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
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
          { name: 'action', internalType: 'enum ChromaticLPAction', type: 'uint8' }
        ]
      }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'automationFeeReserved',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'cancelRebalanceTask',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelSettleTask',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'checkRebalance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
    name: 'checkSettle',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
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
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clbTokenValues',
    outputs: [{ name: 'values', internalType: 'uint256[]', type: 'uint256[]' }]
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
    name: 'distributionRates',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'estimateMinAddLiquidityAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'estimateMinRemoveLiquidityAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
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
    inputs: [],
    name: 'getAutomateLP',
    outputs: [{ name: '', internalType: 'contract IAutomateLP', type: 'address' }]
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
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
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
    name: 'longShortInfo',
    outputs: [{ name: '', internalType: 'int8', type: 'int8' }]
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
    name: 'lpTag',
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
    name: 'minHoldingValueToRebalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
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
    name: 'pendingRemoveClbBalances',
    outputs: [{ name: 'pendingBalances', internalType: 'uint256[]', type: 'uint256[]' }]
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
      { name: 'feePayee', internalType: 'address', type: 'address' },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'rebalance',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rebalanceBPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rebalanceCheckingInterval',
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
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'oracleVersion', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'pendingLiquidity', internalType: 'uint256', type: 'uint256' },
          { name: 'action', internalType: 'enum ChromaticLPAction', type: 'uint8' }
        ]
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'automate', internalType: 'contract IAutomateLP', type: 'address' }],
    name: 'setAutomateLP',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_automationFeeReserved', internalType: 'uint256', type: 'uint256' }],
    name: 'setAutomationFeeReserved',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newName', internalType: 'string', type: 'string' }],
    name: 'setLpName',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newTag', internalType: 'string', type: 'string' }],
    name: 'setLpTag',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_minHoldingValueToRebalance', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinHoldingValueToRebalance',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'receiptId', internalType: 'uint256', type: 'uint256' }],
    name: 'settle',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'receiptId', internalType: 'uint256', type: 'uint256' },
      { name: 'feePayee', internalType: 'address', type: 'address' },
      { name: 'keeperFee', internalType: 'uint256', type: 'uint256' }
    ],
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
    name: 'utilizationTargetBPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
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
