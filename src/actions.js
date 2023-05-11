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
  }
]

export const createDemoActions = () => ([
  ...elementA
])