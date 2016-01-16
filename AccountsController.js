appRoot.controller('AccountsController', function($scope){

    $scope.load = function(){
        $scope.rows = [
            {
                name: 'Brokerage Account 3',
                marketValue: 1999990,
                cash: 1995826,
                legend: 'orange'
            },
            {
                name: 'Account 3',
                marketValue: 1949990,
                cash: 1695856,
                legend: 'darkorange'
            },
            {
                name: 'Brokerage Account 1',
                marketValue: 1349990,
                cash: 1595866,
                legend: 'red'
            },
            {
                name: 'Brokerage Account 4',
                marketValue: 155990,
                cash: 160826,
                legend: 'blue'
            },
            {
                name: 'Brokerage Account 2',
                marketValue: 74560,
                cash: 19956,
                legend: 'gray'
            },
            {
                name: 'Account 4',
                marketValue: 55006,
                cash: 53006,
                legend: 'salmon'
            },
            {
                name: 'Account 13',
                marketValue: 37340,
                cash: 0,
                legend: 'green'
            },
            {
                name: 'Joint Account 1',
                marketValue: 28308,
                cash: 4167,
                legend: 'darkblue'
            },
            {
                name: 'Joint Account 2',
                marketValue: 10000,
                cash: 10000,
                legend: 'teal'
            }
        ];
    };

    $scope.load();


    $scope.totals = {
        name: '',
        marketValue: 0,
        cash: 0,
        legend: 'none'
    };

    $scope.addAccount = function() {
        $scope.rows.push({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: '#'+Math.floor(Math.random()*16777215).toString(16)
        });
    };
    $scope.renderChart = function (){

        var dataPoints = [];
        $.each($scope.rows , function( i , obj){
            dataPoints.push({y :  obj.marketValue});
        });
        var chart = new CanvasJS.Chart("chartContainer",
            {
                title:{
                    text: "Accounts Value Chart"
                },
                legend: {
                    maxWidth: 450,
                    itemWidth: 120
                },
                data: [
                    {
                        type: "pie",
                        showInLegend: false,
                        //legendText: "{indexLabel}",
                        dataPoints: dataPoints
                    }
                ]
            });
        chart.render();
    };



    $scope.totalCost = function(){
        $scope.totals.marketValue = 0;
         $scope.totals.cash = 0;
         for (var i = 0; i < $scope.rows.length; i++) {
            $scope.totals.marketValue += $scope.rows[i].marketValue;
            $scope.totals.cash += $scope.rows[i].cash;
        }
        $scope.renderChart();
    };
    $scope.renderChart();
    $scope.totalCost();

    $scope.showValue = function(row){
      alert(row);
    }

});