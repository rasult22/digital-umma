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
<div>
  <div class="flex space-x-4 py-8 justify-center font-mono">
    <div class="w-[200px] px-8 border-r">
      <div class="text-[80px]  font-medium">
        {days}
      </div>
      <div>
        дней
      </div>
    </div>
    <div class="w-[200px] px-8 border-r">
      <div class="text-[80px]  font-medium">
        {hours === 0 ? '00' : hours}
      </div>
      <div>
        часов
      </div>
    </div>
    <div class="w-[200px] px-8 border-r">
      <div class="text-[80px]  font-medium">
        {minutes === 0 ? '00' : minutes}
      </div>
      <div>
        минут
      </div>
    </div>
    <div class="w-[200px] px-8">
      <div class="text-[80px]  font-medium">
        {seconds === 0 ? '00' : seconds}
      </div>
      <div>
        секунд
      </div>
    </div>
  </div>
</div>