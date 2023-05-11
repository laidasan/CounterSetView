<template>
  <div class="counter-set-panel-view">
    <div class="counter-set-view d-flex">
      <div
        class="counter-set-view-column counter-set-view-column--action action-set-view d-flex"
      >
        <!-- TODO Action Set -->
        <div class="action-set-view-column action-set-view-column--main">
          <div class="element-counter-set">
            <div class="title">element-counter-set</div>
            <div
              v-for="counter of elementCounterSet"
              :key="`${counter.name} + ${counter.creator} + ${counter.value}`"
            >
              {{ genCounterString(counter) }}
            </div>
          </div>
          <div class="preceding-element-counter-set">
            <div class="title">preceding-element-counter-set</div>
            <div
              v-for="counter of precedingElementCounterSet"
              :key="`${counter.name} + ${counter.creator} + ${counter.value}`"
            >
              {{ genCounterString(counter) }}
            </div>
          </div>
        </div>
        <div class="action-set-view-column action-set-view-column--secondary">
          <div class="parent-counter-set">
            <div class="title">parent-counter-set</div>
            <div
              v-for="counter of parentCounterSet"
              :key="`${counter.name} + ${counter.creator} + ${counter.value}`"
            >
              {{ genCounterString(counter) }}
            </div>
          </div>
          <div class="pre-sibling-counter-set">
            <div class="title">pre-sibling-counter-set</div>
            <div
              v-for="counter of preSiblingCounterSet"
              :key="`${counter.name} + ${counter.creator} + ${counter.value}`"
            >
              {{ genCounterString(counter) }}
            </div>
          </div>
        </div>
      </div>
      <div class="counter-set-view-column counter-set-view-column--html">
        <div
          v-for="(htmlString, index) of demoHtml"
          :key="htmlString"
          :class="[
            'demo-html-str',
            { 'demo-html-str--active': index === currentHtmlStep },
          ]"
        >
          {{ htmlString }}
        </div>
      </div>
    </div>
    <div class="counter-set-rules d-flex">
      <!-- TODO rules -->
      <div class="process-rules rules">
        <div class="rules-title">發生順序</div>
        <ol class="rule-list">
          <li
            v-for="(rule, index) of processRules"
            :key="rule"
            :class="[
              'rule-list-item',
              { 'rule-list-item--active': index === currentProcessRuleStep },
            ]"
          >
            {{ rule }}
          </li>
        </ol>
      </div>

      <div class="counter-reset-process-rules rules">
        <div class="rules-title">建立 counter 規則</div>
        <ol class="rule-list">
          <li
            v-for="(rule, index) of counterResetProcessRules"
            :key="rule"
            :class="[
              'rule-list-item',
              {
                'rule-list-item--active':
                  index === currentCounterResetProcessRuleStep,
              },
            ]"
          >
            {{ rule }}
          </li>
        </ol>
      </div>

      <div class="inherit-rules rules">
        <div class="rules-title">繼承規則</div>
        <ol class="rule-list">
          <li
            v-for="(rule, index) of inheritRules"
            :key="rule"
            :class="[
              'rule-list-item',
              { 'rule-list-item--active': index === currentInheritRuleStep },
            ]"
          >
            {{ rule }}
          </li>
        </ol>
      </div>
    </div>
    <div class="features">
      <button class="feature-button feature-button-prev" @click="prev">
        Prev
      </button>
      <button class="feature-button feature-button-next" @click="next">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { isNil } from "ramda";
import { createDemoActions } from "./actions.js";

const NeedUpdateKeys = [
  "elementCounterSet",
  "precedingElementCounterSet",
  "parentCounterSet",
  "preSiblingCounterSet",
  "currentHtmlStep",
  "currentProcessRuleStep",
  "currentInheritRuleStep",
  "currentCounterResetProcessRuleStep",
];

export default {
  name: "App",

  components: {},

  // { name: "test", creator: "element-a", value: 0 },
  data() {
    return {
      actions: createDemoActions(),
      currentAction: -1,
      elementCounterSet: new Set(),
      precedingElementCounterSet: new Set(), // 前一個被解析的 counter-set
      parentCounterSet: new Set(), // 父層的 counter-set
      preSiblingCounterSet: new Set(), // 前一個兄弟元素的 counter-set
      currentHtmlStep: -1,
      currentProcessRuleStep: -1,
      currentInheritRuleStep: -1,
      currentCounterResetProcessRuleStep: -1,

      demoHtml: [
        '<div class="element-a counter-reset">',
        '  <div class="element-b counter-increment counter">b</div>',
        '  <div class="element-c counter-increment counter">c</div>',
        '  <div class="element-d counter-reset counter">d</div>',
        '  <div class="element-e counter-increment counter">e</div>',
        '  <div class="element-f counters">f</div>',
        '  <div class="element-g counter-reset counter">g',
        '    <div class="element-h counter-reset">h',
        '      <div class="element-i counter-increment counters">i</div>',
        "    </div>",
        "  </div>",
        "</div>",
      ],

      processRules: [
        "Existing counters are inherited from previous elements.",
        "New counters are instantiated (counter-reset).",
        "Counter values are incremented (counter-increment).",
        "Counter values are explicitly set (counter-set).",
        "Counter values are used (counter()/counters()).",
      ],

      inheritRules: [
        "If element is the root of its document tree, the element has an initially-empty CSS counters set. Return.",
        "若有前一個兄弟元素, 則繼承前一個兄弟元素的 counters-set",
        "若無前一個兄弟元素，則繼承父層的 counters-set",
        "最終使用 dom tree 中,  前一個被解析節點的 element counters set (所以有可能是前一個元素的後代), 若有與自身 counter 同名且同個 creator 的 counter , 就將前一個解析節點的該 counter 值設定到自身該 counter 的值",
      ],

      counterResetProcessRules: [
        "Let counters be element’s CSS counters set.",
        "Let innermost counter be the last counter in counters with the name name. If innermost counter’s originating element is element or a previous sibling of element, remove innermost counter from counters.",
        "Append a new counter to counters with name name, originating element element, and initial value value",
      ],
    };
  },

  mounted() {},

  methods: {
    genCounterString(counter) {
      return `{ name: ${counter.name}, creator: ${counter.creator}, value: ${counter.value} }`;
    },

    resetToNoneStepData() {
      this.currentAction = -1;
      this.elementCounterSet = new Set();
      this.precedingElementCounterSet = new Set();
      this.parentCounterSet = new Set();
      this.preSiblingCounterSet = new Set();
      this.currentHtmlStep = -1;
      this.currentProcessRuleStep = -1;
      this.currentInheritRuleStep = -1;
      this.currentCounterResetProcessRuleStep = -1;
    },

    next() {
      if (this.currentAction < this.actions.length - 1) {
        const nextAction = this.currentAction + 1;
        const actionData = this.actions[nextAction];

        Object.entries(actionData).forEach(([key, value]) => {
          this[key] = value;
        });
        this.currentAction = nextAction;
      }
    },

    prev() {
      if (this.currentAction >= 0) {
        const prevAction = this.currentAction - 1;
        const actionData = this.actions[prevAction];

        if (isNil(actionData)) {
          this.resetToNoneStepData();
        } else {
          Object.entries(actionData).forEach(([key, value]) => {
            this[key] = value;
          });
          this.currentAction = prevAction;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-set-panel-view {
  width: 1338px;
}
.counter-set-view {
  height: 480px;

  &-column {
    // flex-shrink: 0;
    box-shadow: 0 0 0 1px #fff;

    &--action {
      flex-basis: calc(100% / 3) * 2;
    }

    &--html {
      flex-basis: calc(100% / 3) * 1;
      white-space: pre;
      line-height: 1.3;
      font-size: 18px;
    }
  }
}

.action-set-view {
  &-column {
    flex-shrink: 0;

    &--main {
      flex-basis: 50%;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    &--secondary {
      flex-basis: 50%;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
}

// counter-set
.parent-counter-set,
.pre-sibling-counter-set,
.element-counter-set,
.preceding-element-counter-set {
  line-height: 1.3;
  text-align: center;

  .title {
    font-size: 21px;
    margin-bottom: 8px;
  }
}

.element-counter-set,
.preceding-element-counter-set {
  height: 50%;
}

.parent-counter-set,
.pre-sibling-counter-set {
  height: 50%;
}

// rules
.counter-set-rules {
  padding: 8px 12px 12px;
  flex-wrap: wrap;
}

.process-rules,
.counter-reset-process-rules,
.inherit-rules {
}

.process-rules,
.counter-reset-process-rules {
  flex-basis: calc(50% - 6px);
  margin-bottom: 12px;
}

.process-rule {
  margin-right: 12px;
}

.inherit-rules {
  flex-basis: 100%;
}

.rules-title {
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 8px;
}

.rule-list {
  font-size: 18px;
  line-height: 1.3;
  counter-reset: num 0;

  &-item {
    counter-increment: num;
    transition: color .3s;

    &::before {
      content: counter(num) ".";
    }

    &--active {
      color: $primary;
    }
  }
}

.features {
  text-align: center;
}

.feature-button {
  background-color: $primary;
  border: none;
  color: #fff;
  width: 138px;
  height: 38px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba($primary, 0.9);
  }

  &-next {
  }

  &-prev {
    margin-right: 8px;
  }
}

.demo-html-str {
  transition: color .3s;

  &--active {
    color: $primary;
  }
}
</style>
