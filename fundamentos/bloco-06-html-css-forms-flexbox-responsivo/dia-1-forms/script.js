const states = ['Maranhão', 'São Paulo', 'Rio de Janeiro', 'Paraíba', 'Pernambuco', 'Bahia', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Tocantins', 'Amazonas'];
const select = document.getElementById('state')

function criateStates() {
    for (let i = 0; i < states.length; i += 1) {
    const state = document.createElement('option');
    state.innerHTML = states[i]
    select.appendChild(state)
    }
}
criateStates();