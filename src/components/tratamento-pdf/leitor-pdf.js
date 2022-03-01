export default (props) => {

    function lerPdf(e) {
        let files = e.target.files
        let reader = new FileReader()
        reader.readAsText(files[0])

        reader.onload = (e) => {
            console.log(e.target.result)
        }
    }

    return(
        <div>
            <input className="custom-file-input" type="file" name="file" onChange={(e) => lerPdf(e)}/>
        </div>
    )
}