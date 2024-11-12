export default function Toggle({children, isActive, handleToggle, setMenu}) {
    const rootClasses = ["toggle"];
    if (isActive) {
        rootClasses.push("toggle--active")
    }
    function handleClick() {
        setMenu(false);
        handleToggle();
    }

    return (
        <span className={rootClasses.join(" ").trim()} onClick={handleClick} >
            {children}
        </span>
    )
}