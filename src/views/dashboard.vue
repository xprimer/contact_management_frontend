<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-sidebar">
            <ul class="dashboard-sidebar__menu">
                <li class="dashboard-sidebar__item">
                    <i class="dashboard-sidebar__icon fa fa-user"></i>
                    <a href="#" class="dashboard-sidebar__link">
                        Item 1
                    </a>
                </li>
                <li class="dashboard-sidebar__item">
                    <i class="dashboard-sidebar__icon fa fa-user"></i>
                    <a href="#" class="dashboard-sidebar__link">
                        Item 1
                    </a>
                </li>
                <li class="dashboard-sidebar__item">
                    <i class="dashboard-sidebar__icon fa fa-user"></i>
                    <a href="#" class="dashboard-sidebar__link">
                        Item 1
                    </a>
                </li>
                <li class="dashboard-sidebar__item">
                    <i class="dashboard-sidebar__icon fa fa-user"></i>
                    <a href="#" class="dashboard-sidebar__link">
                        Item 1
                    </a>
                </li>
                <li class="dashboard-sidebar__item">
                    <i class="dashboard-sidebar__icon fa fa-user"></i>
                    <a href="#" class="dashboard-sidebar__link">
                        Item 1
                    </a>
                </li>
            </ul>

        </div>
        <div class="dashboard-content container-fluid m-0 p-0">

        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    props: ['isLogedIn'],
    components: {
    },
    data() {
        return {

        }
    },
    methods:{

    },
    beforeMount() {
        if(!this.isLogedIn) {
            this.$router.push({name : 'login'});
        }
    }

}
</script>

<style lang="scss">
.dashboard-wrapper{
    position: relative;
    box-sizing: border-box;
    height: 1000px;
    width: 100%;
    padding: 0;
    margin: 0;
    z-index: 0s;
}

.dashboard-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 15%;
    height: 100%;
    background-color: #5f5f5f;
    z-index: 1;
    &__menu {
        padding-left: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    };
    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0;
        height: 50px;
        width: 100%;
        &:hover {
            background-color: turquoise;
        }
        &:hover > .dashboard-sidebar__link{
            color: black !important;
        }
        &:hover > .dashboard-sidebar__icon{
            color: black !important;
        }
        
    };
    &__link{
        margin: 0 10px;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        &:hover {
            text-decoration: none;
            color: white;
        }
    };
    &__icon{
        color: white !important;
    }
}



</style>