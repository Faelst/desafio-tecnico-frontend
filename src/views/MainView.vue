<template>
  <div class="max-w-4xl mx-auto py-10 px-6">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Apresentação do Projeto
    </h1>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        📌 Sobre o Projeto
      </h2>
      <p class="text-gray-700 leading-relaxed">
        Este projeto tem como objetivo apresentar minhas habilidades como
        desenvolvedor frontend com foco em escalabilidade, reutilização de
        componentes e boas práticas de arquitetura.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        ⚙️ Arquitetura com Atomic Design
      </h2>
      <p class="text-gray-700 leading-relaxed">
        A estrutura foi desenvolvida com base no padrão
        <strong>Atomic Design</strong>, o que permite uma organização clara e
        reutilizável dos componentes. Dividido em:
      </p>
      <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
        <li>
          <strong>Atoms:</strong> Elementos básicos como botões, textos e
          ícones.
        </li>
        <li>
          <strong>Molecules:</strong> Combinação de átomos que formam elementos
          mais completos, como campos de busca e badges.
        </li>
        <li>
          <strong>Organisms:</strong> Estruturas mais complexas como cabeçalhos
          e cards de tarefas.
        </li>
        <li>
          <strong>Templates:</strong> Layouts prontos para receber conteúdo
          dinâmico.
        </li>
        <li><strong>Pages:</strong> Composição final exibida ao usuário.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        🚀 Habilidades Demonstradas
      </h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Vue 3 com Composition API e TypeScript.</li>
        <li>Componentização reutilizável com Atomic Design.</li>
        <li>Boas práticas de arquitetura escalável e desacoplada.</li>
        <li>Integração com API simulada via <code>json-server</code>.</li>
        <li>
          Tratamento de erros e controle de estados (loading, erro, vazio).
        </li>
        <li>Filtragem eficiente por texto (nome, etapa, etiqueta).</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        📄 Sobre a Paginação
      </h2>
      <p class="text-gray-700 leading-relaxed">
        O projeto utiliza o <code>json-server</code> como mock de API. No
        entanto, essa ferramenta não suporta múltiplos parâmetros do mesmo nome
        (ex: <code>status=pending&status=waiting</code>) em filtros, o que
        inviabiliza a implementação real de paginação junto com múltiplos
        status.
      </p>
      <p class="mt-2 text-gray-700">
        Caso estivesse utilizando uma API real, a paginação já estaria
        implementada e funcional. Ainda assim, o projeto foi preparado para
        escalar nesse sentido, utilizando lógica de paginação já pensada no
        consumo do serviço.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-gray-800 mb-2">🎯 Conclusão</h2>
      <p class="text-gray-700 leading-relaxed">
        O principal objetivo foi entregar um projeto limpo, organizado e com
        base em princípios sólidos de arquitetura frontend. A ideia foi ir além
        do layout e mostrar maturidade técnica no desenvolvimento.
      </p>
    </section>
    <div class="mt-10 text-center">
      <RouterLink
        to="/challenge"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition duration-150"
      >
        Ir para o Desafio
      </RouterLink>
    </div>
  </div>
</template>
