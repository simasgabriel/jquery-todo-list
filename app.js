$(document).ready(function() {
    $("div").on("click", "#done", function() {
      
        var taskElement = $(this).parent()
       
        $(this).remove()
       
        var detachedTask = taskElement.detach()
       
        $(".completed").append(detachedTask)
    });

    $("div").on("click", "#delete", function() {
        var taskToDelete = $(this).parent()
        taskToDelete.remove()
    });

    $("#addTask").click(function() { 
        if ($(".textBox").val() != "") {
            var taskElement = $("<div> </div>")
            taskElement.addClass("task")
            taskElement.text($(".textBox").val())

            var deleteBtnElement = $("<button id='delete'> </button>")
            deleteBtnElement.addClass("fas fa-trash-alt")

            var doneBtnElement = $("<button id='done'> </button>")
            doneBtnElement.addClass("fas fa-check")

            taskElement.append(deleteBtnElement, doneBtnElement)

            $(".notCompleted").append(taskElement)

            $(".textBox").val("") // clear out the text box
        } else {
            alert("Error: Please enter a task before clicking the 'Add' button.");
        }
    });
});