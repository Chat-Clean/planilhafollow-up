# Workflow N8N - Lead para Google Sheets + WhatsApp

## Resumo do Fluxo
1. **Webhook** recebe dados do formulário
2. **Google Sheets** adiciona uma nova linha
3. **API HTTP** envia mensagem WhatsApp

---

## Passo a Passo no N8N

### 1. Criar Webhook (Trigger)
- **Node:** Webhook
- **Método:** POST
- **URL:** `https://teste-n8n.pxohxs.easypanel.host/webhook/leads` (já configurada)
- **Dados esperados:**
  ```json
  {
    "nome": "string",
    "celular": "string (apenas números, ex: 11999999999)",
    "segmento": "string",
    "faturamento": "string",
    "origem": "campanha follow-up v2",
    "dataCadastro": "ISO 8601 date"
  }
  ```

---

### 2. Google Sheets - Adicionar Linha
- **Node:** Google Sheets
- **Operação:** Append Row
- **Configuração:**
  - **Spreadsheet:** Sua planilha (conectar conta Google)
  - **Sheet:** Nome da aba (ex: "Leads")
  - **Colunas:**
    ```
    A: =now() → dataCadastro (ou use a data do webhook)
    B: =input.nome
    C: =input.celular
    D: =input.segmento
    E: =input.faturamento
    F: =input.origem (sempre "campanha follow-up v2")
    ```

---

### 3. HTTP Request - Enviar WhatsApp
- **Node:** HTTP Request
- **Método:** POST
- **URL:** `https://sua-api-whatsapp.com/enviar` (SUBSTITUIR COM SUA URL)
- **Headers:**
  ```json
  {
    "Content-Type": "application/json",
    "Authorization": "Bearer SEU_TOKEN" (se necessário)
  }
  ```
- **Body (exemplo):**
  ```json
  {
    "numero": "{{ $node.Webhook.json.celular }}",
    "mensagem": "Olá {{ $node.Webhook.json.nome }}! Sua planilha está pronta. Segmento: {{ $node.Webhook.json.segmento }}"
  }
  ```

---

## Conectar Nós

1. Webhook → Google Sheets
2. Google Sheets → HTTP Request
3. HTTP Request → Done

---

## Configurações Necessárias

### Google Sheets
- [ ] Conectar conta Google
- [ ] Selecionar Spreadsheet
- [ ] Verificar nome da aba

### HTTP Request (WhatsApp)
- [ ] Adicionar URL correta da sua API
- [ ] Adicionar headers de autenticação (se necessário)
- [ ] Testar formato do payload

### Variáveis Dinâmicas
- `{{ $node.Webhook.json.nome }}`
- `{{ $node.Webhook.json.celular }}`
- `{{ $node.Webhook.json.segmento }}`
- `{{ $node.Webhook.json.faturamento }}`
- `{{ $node.Webhook.json.origem }}`

---

## Teste

1. Preencha o formulário no site
2. Clique em "Liberar Planilha"
3. Clique em "Acessar Planilha"
4. Verifique:
   - ✅ Nova linha adicionada na Google Sheets
   - ✅ Mensagem recebida no WhatsApp
