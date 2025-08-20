<script>
    export let color
</script>

<div style:background={color} />

<style>
    div {
        width: var(--w);
        height: var(--h);
        position: absolute;
        z-index: -1;
        border-radius: 16px;
        inset: var(--i);
        animation: 1s infinite alternate scale;
        animation-delay: var(--d);
    }
</style>