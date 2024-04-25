<form onSubmit={handleUploadSubmit}>
  <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
  <select onChange={(e) => setSelectedFolder(e.target.value)}>
    {folders.map((folder) => (
      <option value={folder.name}>{folder.name}</option>
    ))}
  </select>
  <button type="submit">Upload</button>
</form>
@@ -50,0 +65,9 @@
const handleUploadSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('folderName', selectedFolder);
  const response = await fetch('/api/photos/upload-photo', { method: 'POST', body: formData });
  const data = await response.json();
  console.log(data);
};