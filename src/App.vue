<template>
  <div class="counter-set-panel-view">
    <div class="counter-set-view d-flex">
      <div class="counter-set-view-column counter-set-view-column--action action-set-view d-flex">
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
        </div>
        <div class="action-set-view-column action-set-view-column--secondary">
          <div class="parent-counter-set">
            <div class="title">parent-counter-set</div>
            <div
              v-for="counter of elementCounterSet"
              :key="`${counter.name} + ${counter.creator} + ${counter.value}`"
            >
            {{ genCounterString(counter) }}
            </div>
          </div>
          <div class="pre-sibling-counter-set">
            <div class="title">pre-sibling-counter-set</div>
            <div
              v-for="counter of elementCounterSet"
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
            { 'demo-html-str--active': index === currentHtmlStep}
          ]"
        >
          {{ htmlString }}
        </div>
      </div>
    </div>
    <div class="counter-set-rules">
      <!-- TODO rules -->
      <div class="process-rules rules">
        <div class="rules-title">發生順序</div>
        <ol class="rule-list">
          <li 
            v-for="(rule, index) of processRules"
            :key="rule"
            :class="[
              'rule-list-item',
              { 'rule-list-item--active': index === currentProcessRuleStep }
            ]"
          >
            {{ rule }}
          </li>
        </ol>
      </div>

      <div class="inherit-rules">

      </div>

      <div class="counter-reset-process-rules">

      </div>
    </div>
    <div class="features">
      <button class="feature-button feature-button-prev">Prev</button>
      <button class="feature-button feature-button-next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      history: [],
      elementCounterSet: new Set([
        { name: 'test' , creator: 'element-a', value: 0 }
      ]),
      parentCounterSet: new Set(),
      preSiblingCounterSet: new Set(),
      currentHtmlStep: 0,
      currentProcessRuleStep: 0,
      currentInheritRuleStep: -1,
      currentCounterProcessRuleStep: -1,

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
       '    </div>',
       '  </div>',
       '</div>'
      ],

      processRules: [
        'Existing counters are inherited from previous elements.',
        'New counters are instantiated (counter-reset).',
        'Counter values are incremented (counter-increment).',
        'Counter values are explicitly set (counter-set).',
        'Counter values are used (counter()/counters()).',
      ], 

      inheritRules: [

      ],
      counterResetProcessRules: [

      ]
    };
  },

  mounted() {},

  methods: {
    genCounterString(counter) {
      return `{ name: ${counter.name}, creator: ${counter.creator}, value: ${counter.value} }`
    }
  },
};
</script>

<style lang="scss" scoped>
.counter-set-view {
  min-width: 1024px;
  max-width: 1180px;
  height: 480px;

  &-column {
    flex-shrink: 0;
    box-shadow: 0 0 0 1px #fff;
      
    &--action {
      // flex-grow: 2;
      flex-basis: calc(100% / 3) * 2;
    }

    &--html {
      flex-basis: calc(100% / 3) * 1;
      // flex-grow: 1;
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
      flex-basis: 54%;
    }

    &--secondary {
      flex-basis: 46%;
    }
  }
}

// counter-set
.parent-counter-set,
.pre-sibling-counter-set,
.element-counter-set {
  line-height: 1.3;
  text-align: center;

  .title {
    font-size: 21px;
    margin-bottom: 8px;
  }
}

.element-counter-set {
  padding-top: 12px;
  padding-bottom: 12px;
}

.parent-counter-set,
.pre-sibling-counter-set {
  height: 50%;
}

.counter-set-rules {
  padding: 8px 12px;
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

    &::before {
      content: counter(num) '.';
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
    background-color: rgba($primary, .9);
  }
  
  &-next {
   
  }

  &-prev {
   margin-right: 8px;
  }
}


.demo-html-str {
  &--active {
    color: $primary;
  }
}
</style>
