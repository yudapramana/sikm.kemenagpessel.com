<template>
    <div class="content-wrapper">
        <div class="content">
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Profile</h3>
                            </div>

                            <div class="card-body">
                                <div v-if="currentUser">
                                    Name: {{ currentUser.name }} <br />
                                    Email: {{ currentUser.email }}<br />
                                    <button @click.prevent="logout">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        } this.$Progress.finish();
    },
    created() {
        this.$Progress.start();
    },
};
</script>


<style>
#footer {
    position: fixed !important;
    bottom: 0 !important;
}
</style>