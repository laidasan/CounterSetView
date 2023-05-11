const elementA = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 2,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },

  // 建立 counter
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 0,
  },
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    precedingElementCounterSet: new Set(),
    parentCounterSet: new Set(),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 0,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 2,
  },
]

const elementB = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 2,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter-increment
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 2,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set(),
    currentHtmlStep: 1,
    currentProcessRuleStep: 4,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  }
]

const elementC = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    currentHtmlStep: 2,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    currentHtmlStep: 2,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    currentHtmlStep: 2,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter-increment
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    currentHtmlStep: 2,
    currentProcessRuleStep: 2,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 1 }]),
    currentHtmlStep: 2,
    currentProcessRuleStep: 4,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  }
]

const elementD = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },

   // 建立 counter
   {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 0,
  },
  {
    elementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 1,
  },
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 1,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: 2,
  },

  // counter
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    precedingElementCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 2 }]),
    currentHtmlStep: 3,
    currentProcessRuleStep: 4,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  }
]

const elementE = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    currentHtmlStep: 4,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    currentHtmlStep: 4,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    currentHtmlStep: 4,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter-increment
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    currentHtmlStep: 4,
    currentProcessRuleStep: 2,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  },

  // counter
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 0 }
    ]),
    currentHtmlStep: 4,
    currentProcessRuleStep: 4,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  }
]

const elementF = [
  // 繼承
  {
    elementCounterSet: new Set(),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    currentHtmlStep: 5,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 0,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    currentHtmlStep: 5,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 1,
    currentCounterResetProcessRuleStep: -1,
  },
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    currentHtmlStep: 5,
    currentProcessRuleStep: 0,
    currentInheritRuleStep: 3,
    currentCounterResetProcessRuleStep: -1,
  },


  // counters
  {
    elementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    precedingElementCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    parentCounterSet: new Set([{ name: 'num', creator: 'element-a', value: 0 }]),
    preSiblingCounterSet: new Set([
      { name: 'num', creator: 'element-a', value: 2 },
      { name: 'num', creator: 'element-d', value: 1 }
    ]),
    currentHtmlStep: 5,
    currentProcessRuleStep: 4,
    currentInheritRuleStep: -1,
    currentCounterResetProcessRuleStep: -1,
  }
]


export const createDemoActions = () => ([
  ...elementA,
  ...elementB,
  ...elementC,
  ...elementD,
  ...elementE,
  ...elementF
])