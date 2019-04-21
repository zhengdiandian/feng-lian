<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
          <section class="balance">
              
          </section>
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'plannedRecharge',
    components: {
        PageHeader
    },
    data() {
        return {
            upload: '计划充值'
        }
    }
}
</script>
<style scoped lang="scss">
</style>
