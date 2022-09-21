// src/figmaTokensChakra/comp/select.json
var select = {
  sm: {
    height: {
      type: "sizing",
      value: "{semantic.component.small}"
    },
    "icon-size": {
      value: "{size.250}",
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.xs}"
    }
  },
  md: {
    height: {
      type: "sizing",
      value: "{semantic.component.medium}"
    },
    "icon-size": {
      value: "{size.250}",
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.sm}"
    }
  },
  lg: {
    height: {
      type: "sizing",
      value: "{semantic.component.large}"
    },
    "icon-size": {
      value: "{size.250}",
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.md}"
    }
  },
  "space-between": {
    type: "spacing",
    value: "{semantic.spacing.inputs.medium.padding-top}"
  },
  "border-radius": {
    type: "borderRadius",
    value: "{semantic.border-radius.actions}"
  },
  "border-width": {
    type: "borderWidth",
    value: "{semantic.border-width.inputs}"
  },
  default: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.default.border-color}"
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.default.background-color}"
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.default.text-color}"
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}"
    }
  },
  hover: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.default.border-color}"
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.hover.background-color}"
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.hover.text-color}"
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}"
    }
  },
  focus: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.focus.focus-ring}"
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.default.background-color}"
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.default.text-color}"
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}"
    },
    "border-width": {
      value: "{semantic.border-width.focus}",
      type: "borderWidth"
    }
  },
  invalid: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.error.border-color}"
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.error.background-color}"
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.error.text-color}"
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.error.icon-color}"
    }
  },
  disabled: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.border-color}"
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.background-color}"
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.text-color}"
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.icon-color}"
    }
  },
  "font-family": {
    value: "{semantic.font-family.inputs}",
    type: "fontFamilies"
  },
  "font-weight": {
    value: "{semantic.font-weight.inputs}",
    type: "fontWeights"
  }
};
var select_default = {
  select
};
export {
  select_default as default,
  select
};
