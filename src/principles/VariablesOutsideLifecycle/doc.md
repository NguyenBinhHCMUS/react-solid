# Put independent variables outside of React lifecycle

The idea is to separate logic that doesn’t require the React component lifecycle methods from the component itself. This improves code clarity by making dependencies more explicit. Therefore, it becomes much easier to read and understand components.

**Problem**

```js
function useItemsList() {
  const defaultItems = [1, 2, 3, 4, 5];
  const [items, setItems] = useState(defaultItems);

  const toggleArrayItem = (arr, val) => {
    return arr.includes(val)
      ? arr.filter((el) => el !== val)
      : [...arr, val];
  };

  const handleToggleItem = (num) => {
    return () => {
      setItems(toggleArrayItem(items, num));
    };
  };

  return {
    items,
    handleToggleItem,
  };
}
```

**Solution**

```js
const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const toggleArrayItem = (arr, val) => {
  return arr.includes(val)
    ? arr.filter((el) => el !== val)
    : [...arr, val];
};

function useItemsList() {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const handleToggleItem = (num) => {
    return () => {
      setItems(toggleArrayItem(items, num));
    };
  };

  return {
    items,
    handleToggleItem,
  };
}
```
