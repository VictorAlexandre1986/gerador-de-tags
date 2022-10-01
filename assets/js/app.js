let tags = [];
		let conteudo = []

		function addTag(event){
			let code = (event.keyCode ? event.keyCode : event.which);
			if(code != 13){
				return
			}

			let tag = event.target.value.trim();
			if(tag.length < 1 || tags.includes(tag)){
				event.target.value = "";
				return;
			}

			let index = tags.push(tag);
			conteudo.push(tag)

			let tagItem = document.createElement('div');
			tagItem.classList.add('item');
			tagItem.innerHTML = `
			<span class="delete-btn" onclick="deleteTag(this,'${tag}')">
			&times;
			</span>
			<span>${tag}</span>
			`;

			document.querySelector(".tag-input .tag-list").appendChild(tagItem);
			event.target.value=""

			console.log(conteudo);
		}

		function deleteTag(ref,tag){
			let parent = ref.parentNode.parentNode;
			parent.removeChild(ref.parentNode);
			let index = tags.indexOf(tag);
			tags.splice(index);	
			console.log(tags)
		}

		document.querySelector(".tag-input input").addEventListener("keyup",addTag);