# vue-page-visibility 

A Vue 2.x component of easy-to-config page visibility api

### Introduction

[Demo](https://sevenoutman.github.io/vue-aplayer)

## Install

```
$ npm install vue-page-visibility --save
```

## Usage

```HTML
    <VuePageVisibility 
        @documentInactive="documentInactive" 
        @documentActive="documentActive" >
    </VuePageVisibility>

```

```JS
import VuePageVisibility from 'vue-page-visibility'

new Vue({
    components: {
        VuePageVisibility
    }
})
```

### Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| documentInactive | none | Triggered when user leave the focus page |
| documentActive | none | Triggered when user refocus the page |


## Contribute

Feel free to [open an issue](https://github.com/SevenOutman/vue-aplayer/issues) if you find a bug.

Feature requests and PRs are welcome.

## LICENSE

MIT Licensed. See [LICENSE](https://github.com/SevenOutman/vue-aplayer/blob/master/LICENSE).
