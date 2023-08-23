为什么使用 requestAnimationFrame 来写定时器呢？
答：当页面离开或切换到其他标签页时，requestAnimationFrame 中的代码将不再执行。
详解：因为 requestAnimationFrame 方法依赖于浏览器的渲染循环，而在页面不可见或失去焦点时，浏览器会暂停渲染循环以减少资源消耗。
因此，使用 requestAnimationFrame 实现的动画或定时器，在页面不可见或失去焦点时会自动暂停，直到页面重新可见或获得焦点时才会继续执行。
这是浏览器的默认行为，无需额外处理。

    如果你希望即使在页面不可见时仍然执行代码，可以考虑使用 setTimeout 或 setInterval 这样的定时器函数，它们在页面不可见时仍会继续执行。
    不过请注意，频繁的定时器操作可能会对性能产生负面影响，因此需要谨慎使用。

如果不用 requestAnimationFrame,也可以用别的方法实现-->离开页面时定时器停止，回到页面时定时器继续走动的效果

方法：可以利用 window 对象的 blur 和 focus 事件来监听页面失去焦点和获得焦点的状态。
