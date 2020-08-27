<template>
    <div class="user">
        <h1>Subcomponents List</h1>
            <div class="container-lg">
                <div class="table-responsive container-fluid">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-5">
                                    <h2><b>Users</b></h2>
                                </div>
                                <div class="col-sm-7">
                                    <a href="#" class="btn btn-secondary"><fa-icon :icon="['fas', 'plus-circle']"/><span>Add New User</span></a>

                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Code</th>
                                <th scope="col">Jira</th>
                                <th scope="col">Playbook</th>
                                <th scope="col">TOI</th>
                                <th scope="col">Slack Support</th>
                                <th scope="col">Slack Engineer</th>
                            </tr>
                            </thead>
                            <tbody v-for="sub in retrievedSubs">
                            <tr>
                                <td>{{sub.id}}</td>
                                <td><a href="#"class="avatar">{{sub.productid.name}}</a></td>
                                <td>{{sub.name}}</td>
                                <td>{{sub.notes}}</td>
                                <td>{{sub.code}}</td>
                                <td>{{sub.jira}}</td>
                                <td>{{sub.playbook}}</td>
                                <td>{{sub.toi}}</td>
                                <td>{{sub.slacksupport}}</td>
                                <td>{{sub.slackengineer}}</td>
                                <td>
                                    <a href="#" class="settings" title="Settings" data-toggle="tooltip"><fa-icon :icon="['fas', 'wrench']"/></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip"><fa-icon class = "test" :icon="['fas', 'trash-alt']"/></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    import api from "./backend-api";

    export default {
        name: 'subcomponents',
        data() {
            return {
                response: [],
                errors: [],
                sub: {
                    id: 0,
                    productid: '',
                    name: '',
                    notes: '',
                    code: '',
                    jira: '',
                    playbook: '',
                    toi: '',
                    slacksupport: '',
                    slackengineer: ''
                },
                showResponse: false,
                retrievedSubs: {},
                showRetrievedSubs: false
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                api.getSubs().then(response => {
                    console.log(response)
                    this.retrievedSubs = response.data;
                    this.showRetrievedSubs = true
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .table-responsive {
        margin: 40px 0;

    }
    .table-wrapper {
        min-width: 1000px;
        background: #fff;
        padding: 20px 25px;
        border-radius: 6px;
        box-shadow: 0 3px 3px rgba(0,0,0,.05);
    }
    .table-title {
        padding-bottom: 10px;
        background: linear-gradient(50deg, rgba(34,83,195,1) 0%, rgba(65,180,36,1) 100%);
        color: #fff;
        padding: 20px 30px;
        margin: -20px -27px 10px;
        border-radius: 3px 3px 0 0;
    }
    .table-title h2 {
        margin: 5px 0 0;
        padding-right: 50%;
        font-size: 24px;
    }
    .table-title .btn {
        color: #566787;
        float: right;
        font-size: 13px;
        background: #fff;
        border: none;
        min-width: 50px;
        border-radius: 2px;
        border: none;
        outline: none !important;
        margin-left: 10px;
    }
    .table-title .btn:hover, .table-title .btn:focus {
        color: #566787;
        background: #f2f2f2;
    }
    .table-title .btn i {
        float: left;
        font-size: 21px;
        margin-right: 5px;
    }

    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
        padding: 12px 15px;
        vertical-align: middle;
    }
    table.table tr th:first-child {
        width: 60px;
    }
    table.table tr th:last-child {
        width: 100px;
    }
    table.table-striped tbody tr:nth-of-type(odd) {
        background-color: #fcfcfc;
    }
    table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
    }
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }
    table.table td:last-child i {
        opacity: 0.9;
        font-size: 22px;
        margin: 0 5px;
    }
    table.table td a {
        font-weight: bold;
        color: #566787;
        display: inline-block;
        text-decoration: none;
    }
    table.table td a:hover {
        color: #2196F3;
    }
    table.table td a.settings {
        color: #2196F3;
    }
    table.table td a.delete {
        color: #F44336;
    }
    table.table td i {
        font-size: 19px;
    }

    @media (min-width: 1200px){
        .table-responsive {
            width: 1170px;
        }
    }
</style>