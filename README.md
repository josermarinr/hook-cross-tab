
![CI/CD](https://github.com/dyarleniber/react-workflow-gh-actions/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/josermarinr/hook-cross-tab/branch/main/graph/badge.svg?token=AKWCORZ5M9)](https://codecov.io/gh/josermarinr/hook-cross-tab)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)


[Spanish Version](./README/README(es).md)

# hook cros tab
![demo](https://media.giphy.com/media/z5jkiPFINbVppEtymH/giphy.gif)
## Motivation

This hook helps to share the status among many tabs, it is multipurpose,
the motivation for making this type of hook is because we entered a new era
when having a lot of screens on your workstation is normal at this time and we need to adapt to that.

Constantly configuring hooks to save and share states, the idea of hook-cross-tab comes out, enabled to work with only 3 properties

## To use

call the hook inside the function and you need pass three props,

first the key of your data, this will be the name of the data to be stored

second data, this hook accepts any data type

third the option, it only accepts "local" for localstorage and "broadcast"

example
```
const [todos, setTodos] = useCrossTabState(
    {
        key: "tareas",
        initialState: [],
        option: "broadcast"
    }
)
```

i invite you to see the real implementation in
[this repo](https://github.com/josermarinr/example-hook-cross-tab)

***by J. MARIN :anchor:***
