<script>
  import { onMount } from "svelte";

  let days = 0
  let hours = 0
  let minutes = 0
  let seconds = 0

  const eventDate = new Date(Date.UTC(2024,1,17,4,0,0))
  onMount(() => {
    const id = setInterval(() => {
      const date = new Date()
      const currentDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()))
      const timeDifference = eventDate - currentDate;
      days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    }, 1000);
  })
</script>
<div class="sm:order-3">
  <div class="flex py-8 justify-center font-mono">
    <div class="w-[230px] sm:w-[25vw] px-11 sm:px-4 border-r border-[#363636]">
      <div class="text-[80px] sm:text-[30px]  font-medium">
        {days}
      </div>
      <div class="text-[20px] sm:text-[14px]">
        дней
      </div>
    </div>
    <div class="w-[230px] sm:w-[25vw] px-11 sm:px-4 border-r border-[#363636]">
      <div class="text-[80px] sm:text-[30px] font-medium">
        {hours === 0 ? '00' : hours}
      </div>
      <div class="text-[20px] sm:text-[14px]">
        часов
      </div>
    </div>
    <div class="w-[230px] sm:w-[25vw] px-11 sm:px-4 border-r border-[#363636]">
      <div class="text-[80px] sm:text-[30px] font-medium">
        {minutes === 0 ? '00' : minutes}
      </div>
      <div class="text-[20px] sm:text-[14px]">
        минут
      </div>
    </div>
    <div class="w-[230px] sm:w-[25vw] px-11 sm:px-4">
      <div class="text-[80px] sm:text-[30px]  font-medium">
        {seconds === 0 ? '00' : seconds}
      </div>
      <div class="text-[20px] sm:text-[14px]">
        секунд
      </div>
    </div>
  </div>
</div>