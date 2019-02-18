it("length of valid style should be 1", () => {
	var parent = document.createElement("div");
	parent.innerHTML = '<div style="font-size:15px">some text</div>';
	var element = parent.querySelector("div");

	expect(element.style.length).toBe(1);
});

it("length of invalid style should be 0", () => {
	var parent = document.createElement("div");
	parent.innerHTML = '<div style="font-size:1r5px">some text</div>';
	var element = parent.querySelector("div");

	expect(element.style.length).toBe(0);
});
