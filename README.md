# ReactFlot
ReactFlot - A react component for using Flot

For information about Flot library [go here](http://www.flotcharts.org/).

## Usage
```javascript
import ReactFlot from 'react-flot';

render () {
  return (
    <ReactFlot id="product-chart" options={options} data={data} width="50%" height="100px" />
  );
}

```

## Arguments
* `@id` is the id of the chart. It is required and must be unique
* `@options` is the options based on flot documentation
* `@data` is the data based on flot documentation
* `@width` is the width of the component (default to 100%)
* `@height` is the height of the component (default to 400px)

## Available plugins
* `Tooltip` from https://github.com/krzysu/flot.tooltip

## Contributors
Would you like to contribute to this library? Don't be shy! [Contact me](mailto:rodrigowirth90@gmail.com) if you are interested on it.
