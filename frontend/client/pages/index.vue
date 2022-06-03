<script lang="ts" setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
        const { result, loading, error } = useQuery(CHARACTERS_QUERY)
</script>


<template>
<div class="container">
	<h1>Home Page</h1>
	<div class="d-flex flex-column">

	</div>
</div>
</template>