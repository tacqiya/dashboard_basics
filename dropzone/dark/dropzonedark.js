const dropzoneBoxDark = document.getElementsByClassName("dropzone-box-dark")[0];

const inputFilesDark = document.querySelectorAll(
    ".dropzone-area-dark input[type='file']"
);

const inputElementDark = inputFilesDark[0];

const dropZoneElementDark = inputElementDark.closest(".dropzone-area-dark");

inputElementDark.addEventListener("change", (e) => {
    if (inputElementDark.files.length) {
        updateDropzoneFileListDark(dropZoneElementDark, inputElementDark.files[0]);
    }
});

dropZoneElementDark.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElementDark.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElementDark.addEventListener(type, (e) => {
        dropZoneElementDark.classList.remove("dropzone--over");
    });
});

dropZoneElementDark.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
        inputElementDark.files = e.dataTransfer.files;

        updateDropzoneFileListDark(dropZoneElementDark, e.dataTransfer.files[0]);
    }

    dropZoneElementDark.classList.remove("dropzone--over");
});

const updateDropzoneFileListDark = (dropzoneElementDark, file) => {
    let dropzoneFileMessageDark = dropzoneElementDark.querySelector(".file-info");

    dropzoneFileMessageDark.innerHTML = `
        ${file.name}, ${file.size} bytes
    `;
};

dropzoneBoxDark.addEventListener("reset", (e) => {
    let dropzoneFileMessageDark = dropZoneElementDark.querySelector(".file-info");

    dropzoneFileMessageDark.innerHTML = `No Files Selected`;
});

dropzoneBoxDark.addEventListener("submit", (e) => {
    e.preventDefault();
    const myFiledDark = document.getElementById("upload-file");
    console.log(myFiledDark.files[0]);
});