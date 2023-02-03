Avoid nesting component inside a component in React ----- The reason : the creation of new instances...
https://youtu.be/2sAdzy90GtE?list=TLPQMDMwMjIwMjOIDriet1lLQw
Sol :
you absolutely need to nest a component (I cannot think of any reason) you can always use refs or wrap it on a useMemo hook to stop the creation of new instances

Nested components are defined in an enclosing one and can be simple functions or arrow expressions. React recreates them systematically during the render pass because it doesn’t know they haven’t changed. This hurts performance as the components are recreated too many times. However, this can also hide surprising bugs where the state of the nested components is lost between renders. Trying to use useCallback hooks for child components is also discouraged. You should actually refactor this code to define a component on its own, passing props if needed.

function SomeComponent({ footer: Footer }) {
return (
<div>
<Footer />
</div>
);
}

function Component() {
return (
<div>
<SomeComponent footer={ () => <div /> } /> { /_ footer is a component nested inside 'Component' _/ }
</div>
);
}
