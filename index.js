//Doubbly linked list
//doubbly linked list nodes are larger but tehy allow a program to cycle through nodes from the from or end of the list

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prior = null
    }
}

class DoubblyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    add(data){
        let newNode = new Node(data)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prior = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head){return undefined}
        let popered = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = popered.prior
            this.tail.next = null
            popered.prev = null
        }
        this.length--
        return popered
    }
    view(node){
        if(node < 0 || node >= this.length)return null;
        let count, current;
        if(node <= this.length/2){
            count = 0
            current = this.head
            while(count !== node){
                current = current.next
                count++
            }
        } else { 
            count = this.length -1
            current = this.tail
            while(count !== node){
                current = current.prior
                count--
            }
        }
        return current
    }
    replace(node,data){
        let repNode = this.view(node)
        if(repNode != null){
            repNode.data = data
            return true
        }
        return false
    }
}

// create
let dll = new DoubblyLinkedList()
console.log(dll)
// add
dll.add("node 0")
dll.add("node 1")
dll.add("node 2")
dll.add("node 3")
dll.add("node 4")
console.log(dll)
// pop
dll.pop()
console.log(dll)
// view
console.log(dll.view(1))
// replace
dll.replace(3,"Beans")
console.log(dll.view(3))

