
![CI/CD](https://github.com/dyarleniber/react-workflow-gh-actions/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/josermarinr/hook-cross-tab/branch/master/graph/badge.svg)](https://codecov.io/gh/josermarinr/hook-cross-tab)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)


# hook cros tab

## Motivation

this hook help to share state between many tabs, its multipurpose,  
the motivation to do this type hook is beacause we arrive a new age 
when the multiscreen are the normality in this time and we need adapte to that.

## To use

call the hook inside the function and you need pass two props,

first the kay of your data, this will be the name of the data will be store

second the data, this hook accepting any type of data

in this repo its use
```
  const [todos, setTodos] = useCrossTabState("tareas", [])
                                              key       defaultdata
```
