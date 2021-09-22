
export default function Iframescript() {
    return (
        function getIframeContent(iframeItemy) {
            var frameObj = document.getElementById(iframeItemy);
            var frameContent = frameObj.contentWindow.document.body.innerHTML;   
            alert("frame content : " + frameContent);
            console.log("test")
        }
    )
}
