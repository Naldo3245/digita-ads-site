import React, { useState } from 'react';
import { storage } from '../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function CreateService() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();

    if (!image) {
      alert('Selecione uma imagem.');
      return;
    }

    const storageRef = ref(storage, `services/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Erro no upload:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
          alert('Imagem enviada com sucesso!');
        });
      }
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Serviço</h2>

      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Título</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descrição</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Imagem</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {uploadProgress > 0 && (
          <div className="text-sm">Progresso: {uploadProgress.toFixed(0)}%</div>
        )}

        {imageUrl && (
          <div className="mt-2">
            <p className="text-green-600 text-sm">Upload concluído com sucesso!</p>
            <img src={imageUrl} alt="Preview" className="mt-2 w-32 h-auto rounded" />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar Serviço
        </button>
      </form>
    </div>
  );
}

export default CreateService;
