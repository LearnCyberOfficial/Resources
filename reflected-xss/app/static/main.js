function update_description() {
    const searchParams = new URLSearchParams(window.location.search);
    const description = searchParams.get("description");
    description && (document.querySelector("#description").innerHTML = description);
}

function do_something() {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("description", document.querySelector("#payload").value);
    window.location.search = searchParams.toString();
    update_description();
}

update_description();