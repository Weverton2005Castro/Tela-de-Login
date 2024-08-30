import React, { useState } from 'react';
import './tela.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [quantidade, setQuantidade] = useState('');
  const [modelo, setModelo] = useState('');
  const [cliente, setCliente] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoProduto = {
      quantidade,
      modelo,
      cliente,
      data,
    };
    setProdutos([...produtos, novoProduto]);
    setQuantidade('');
    setModelo('');
    setCliente('');
    setData('');
  };

  return (
    <div>
      <h1>Adicione os Produtos</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <th>Quantidade</th>
            <th>Modelo</th>
            <th>Cliente</th>
            <th>Data</th>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                value={quantidade}
                onChange={(event) => setQuantidade(event.target.value)}
                required
              />
            </td>
            <td>
              <select
                value={modelo}
                onChange={(event) => setModelo(event.target.value)}
                required
              >
                <option value="">Selecione o modelo</option>
                <option value="A-910">A-910</option>
                <option value="P90-STONE">P90-STONE</option>
                <option value="A-920">A-920</option>
              </select>
            </td>
            <td>
              <select
                value={cliente}
                onChange={(event) => setCliente(event.target.value)}
                required
              >
                <option value="">Selecione o cliente</option>
                <option value="Stone Ton">Stone Ton</option>
                <option value="pax">pax</option>
                <option value="get net">get net</option>
                {/* adicionar mais opções aq
                 */}
              </select>
            </td>
            <td>
              <input
                type="date"
                value={data}
                onChange={(event) => setData(event.target.value)}
                required
              />
            </td>
          </tr>
        </table>
        <button type="submit">Adicionar Produto</button>
      </form>
      <h1>Tabela de Produtos</h1>
      <table id="produtoTable">
        <thead>
          <tr>
            <th>Quantidade</th>
            <th>Modelo</th>
            <th>Cliente</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.quantidade}</td>
              <td>{produto.modelo}</td>
              <td>{produto.cliente}</td>
              <td>{produto.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;