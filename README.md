# 表格生成插件



## 使用步骤



### 先准备一个表格

```html
 <table id="hmtb">
    <thead>
      <tr>
        <th data-column="id">序号</th>
        <th data-column="name">姓名</th>
        <th data-column="age">年龄</th>
        <th data-column="addr">籍贯</th>
      </tr>
    </thead>
  </table>
```

- 需要多少列，就写多少个th
- 每个th用data-column指定这一列要绑定的数据名



## 准备给表格的数组数据

```js
    let list = [{
      id: 1,
      name: 'jack',
      age: 18,
      addr: '深圳'
    },
    {
      id: 2,
      name: 'jack2',
      age: 16,
      addr: '北京'
    }, {
      id: 3,
      name: 'jack3',
      age: 15,
      addr: '上海'
    },
    ]
```



### 再找到表格初始化

```js
$('#hmtb').table(数组)
```

